import os
import socket
import threading
import tkinter as tk
from tkinter import messagebox
import webbrowser
from flask import Flask, render_template, request, redirect, url_for, send_file
from pymongo import MongoClient
from pymongo.server_api import ServerApi
import qrcode
import requests
from flask_cors import CORS

# Flask setup
app = Flask(__name__)
CORS(app)  # This allows all domains to make requests to your Flask app

# MongoDB URI and Client setup
uri = "mongodb+srv://arpitpandeyyyy:arpitpandey@deloitte.daxpn.mongodb.net/?retryWrites=true&w=majority&appName=deloitte"
client = MongoClient(uri, server_api=ServerApi('1'))

# Ensure successful connection to MongoDB
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print("Error: Could not connect to MongoDB.", e)

db = client.get_database('deloitte')
students_collection = db.get_collection('students')

def get_local_ip():
    """Get local machine's IP address."""
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(('8.8.8.8', 80))
        local_ip = s.getsockname()[0]
    finally:
        s.close()
    return local_ip

# Ensure the 'static' directory exists
static_dir = 'static'
os.makedirs(static_dir, exist_ok=True)

@app.route('/')
def navigate():
    """Render a page with buttons to navigate to the QR code and responses."""
    return render_template('navigate.html')

@app.route('/form')
def form():
    """Render the student form page."""
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    """Handle form submission and store data in MongoDB."""
    name = request.form.get('name')
    data = request.form.get('data')

    if name and data:
        student_data = {'name': name, 'data': data}
        students_collection.insert_one(student_data)

    return redirect(url_for('view_submission', name=name))

@app.route('/submission/<name>')
def view_submission(name):
    """Render the submission page to view submitted data."""
    student = students_collection.find_one({'name': name})
    if student:
        return render_template('submission.html', student=student)
    else:
        return "No data found", 404

@app.route('/admin')
def admin():
    """Render the admin page to view all students."""
    students = students_collection.find()
    return render_template('admin.html', students=students)

@app.route('/generate-qr')
def generate_qr():
    """Generate a QR code linking to the student form."""
    local_ip = get_local_ip()
    form_url = f"http://{local_ip}:5000/form"
    qr = qrcode.make(form_url)
    qr_path = os.path.join(static_dir, 'student_form_qr.png')
    qr.save(qr_path)
    return send_file(qr_path, mimetype='image/png')

# Flask shutdown function
@app.route('/shutdown', methods=['POST'])
def shutdown():
    """Shutdown the Flask server gracefully."""
    shutdown_server = request.environ.get('werkzeug.server.shutdown')
    if shutdown_server:
        shutdown_server()  # Shut down the Flask server
    return 'Shutting down...'

# Function to run Flask app in a separate thread
def run_flask():
    """Run Flask app in a separate thread."""
    app.run(host='0.0.0.0', port=5000, debug=True, use_reloader=False)

def create_tkinter_window():
    """Create and display Tkinter control window."""
    window = tk.Tk()
    window.title("Control Panel")
    window.geometry("300x200")

    def stop_flask():
        """Stop Flask server and close Tkinter window."""
        try:
            # Send a POST request to Flask's shutdown endpoint
            response = requests.post("http://127.0.0.1:5000/shutdown")
            if response.status_code == 200:
                messagebox.showinfo("Stopping", "Stopping Flask server and closing application.")
            else:
                messagebox.showerror("Error", "Failed to stop Flask server.")
        except Exception as e:
            messagebox.showerror("Error", f"Error stopping server: {e}")
        window.quit()  # Close the Tkinter window

    stop_button = tk.Button(window, text="Stop All Threads and Close", command=stop_flask)
    stop_button.pack(pady=50)

    window.protocol("WM_DELETE_WINDOW", stop_flask)  # Handle window close event
    window.mainloop()

# Start Flask app in a background thread when the "Run Server" button is clicked
def run_server():
    flask_thread = threading.Thread(target=run_flask)
    flask_thread.daemon = True  # Ensures the thread stops when the main program exits
    flask_thread.start()

# Create the main Tkinter window
root = tk.Tk()
root.title("Flask Server & QR Generator App")
root.geometry("400x300")

# Frame to hold the buttons
frame = tk.Frame(root)
frame.pack(pady=20)

# Button to start Flask server
btn_run_server = tk.Button(frame, text="Run Server", command=run_server)
btn_run_server.pack(side=tk.LEFT, padx=10)

# Button to open the main page in the browser
def open_main_page():
    local_ip = get_local_ip()
    webbrowser.open(f'http://{local_ip}:5000', new=2)  # Opens the default browser to the Flask server

btn_open_main_page = tk.Button(frame, text="Open Main Page", command=open_main_page)
btn_open_main_page.pack(side=tk.LEFT, padx=10)

# Start the Tkinter main loop
root.mainloop()
