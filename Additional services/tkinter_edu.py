import tkinter as tk
import subprocess
import requests
import os
from PIL import Image, ImageTk
import sys
import threading
from io import BytesIO
import webbrowser

# Function to run the Flask server (flask_server.py) in a separate process
def run_server():
    global server_process
    try:
        # Run the Flask server in a separate process
        server_process = subprocess.Popen(["python3", "app.py"])
        print("Server started...")
    except Exception as e:
        print(f"Error starting server: {e}")

# Function to generate QR code by hitting Flask API and displaying it
def generate_qr():
    try:
        # Flask server should already be running before this can be called
        qr_url = "http://127.0.0.1:5000/generate-qr"
        
        # Make a GET request to the Flask server to generate the QR
        response = requests.get(qr_url)
        
        if response.status_code == 200:
            # Save the QR image received from the Flask server
            with open("student_form_qr.png", "wb") as f:
                f.write(response.content)

            # Start a new thread to display the QR code
            threading.Thread(target=show_qr).start()
        else:
            print("Error: Unable to generate QR code.")
    except Exception as e:
        print(f"Error: {e}")

# Function to show the generated QR code in the Tkinter window
def show_qr():
    try:
        # Open the saved image using PIL
        img = Image.open("student_form_qr.png")
        
        # Resize image to a larger size (e.g., 500x500 pixels)
        img = img.resize((500, 500))  # Increase the size of the QR code

        # Save image to a BytesIO object
        img_byte_arr = BytesIO()
        img.save(img_byte_arr, format='PNG')
        img_byte_arr = img_byte_arr.getvalue()

        # Create a Tkinter-compatible image using PhotoImage
        img_tk = tk.PhotoImage(data=img_byte_arr)

        # Update the label with the image
        qr_label.config(image=img_tk)
        qr_label.image = img_tk  # Keep a reference to avoid garbage collection
    except Exception as e:
        print(f"Error displaying QR code: {e}")

# Function to open the browser at /admin
def show_response():
    print("Opening browser at http://127.0.0.1:5000/admin")
    webbrowser.open("http://127.0.0.1:5000/admin")

# Create the main window
root = tk.Tk()
root.title("Flask Server & QR Generator App")

# Set the window to full-screen
root.attributes('-fullscreen', True)

# Create a frame to contain the buttons and align them horizontally
button_frame = tk.Frame(root)
button_frame.pack(pady=10)

# Create the buttons inside the frame
btn_run_server = tk.Button(button_frame, text="Run Server", command=run_server)
btn_run_server.pack(side=tk.LEFT, padx=10)

btn_generate_qr = tk.Button(button_frame, text="Generate QR", command=generate_qr)
btn_generate_qr.pack(side=tk.LEFT, padx=10)

btn_show_response = tk.Button(button_frame, text="Show Response", command=show_response)
btn_show_response.pack(side=tk.LEFT, padx=10)

# Add the Close Window button
btn_close_window = tk.Button(button_frame, text="Close Window", command=root.quit)
btn_close_window.pack(side=tk.LEFT, padx=10)

# Label to display the QR code
qr_label = tk.Label(root)
qr_label.pack(pady=10)

# Start the Tkinter main loop
root.mainloop()
