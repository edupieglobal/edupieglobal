import director from "./director.jpeg";
import arjun from "./arjun.jpeg";
import rashmi from "./Rashmi.jpeg";
import shilpa from "./shilpa.jpeg";
import Sateesh from "./Sateesh.jpeg";
import Chandrahasan from "./Chandrahasan.jpg";
import { image } from "framer-motion/client";
const facultyData = [
  {
    name: "M Bhimsen",
    position: "Director, Edu-Pie Global",
    image: director,
    bio: `
      Mr. M Bhimsen is an M.A in English and also holds a PG Diploma in English Language Teaching from the Regional Institute of English, Bangalore (2008).
      He has been in the training field for the last 35 years and has trained more than 50,000 students. 
      His area of expertise is Soft Skills and Verbal Ability, and he has trained students from many colleges in Bangalore, such as MSRIT, Brindavan College of Engineering, New Horizon College of Engineering, NDC, to name a few. 
      He was the VP, Marketing for SilverPeak Global Pvt Ltd, Bangalore, and was the Head of Campus Recruiting Training at T.I.M.E, Bangalore.
      Mr. Bhimsen served in the Indian Air Force for 20 years in the field of Education and has also shouldered many other responsibilities during his tenure.
      Currently, he is the Director of Edu-Pie Global. He has a passion for teaching and counselling.
    `,
  },
  {
    name: "Mr. Sateesh Kumar",
    position: "IIM-C Alumni",
    image: Sateesh,
    bio: `
      With a belief that the highest form of satisfaction is when one makes a difference in the lives of people, Sateesh has embarked on a journey to make this happen. 
      He is an alumnus of IIM Calcutta and has more than 14 years of rich experience in the education industry across various capacities. 
      Sateesh is a motivational speaker who has delivered talks in top institutes across Karnataka and Tamil Nadu and has mentored more than 100,000 individuals, empowering them with the skill sets required to make their dreams a reality. 
      He is also a certified stress management coach and corporate trainer, actively involved in developing engaging modules for enhanced learning. His sessions are known for their thought-provoking nature and the simplicity with which he delivers powerful insights. 
      An avid reader and puzzle enthusiast, Sateesh specializes in Quantitative Aptitude and Logical Reasoning.
    `,
  },
  {
    name: "Dr. N Jayarama Shetty",
    position: "Trainer, Personality Development & NLP Expert",
    bio: `
      Dr. Shetty holds a Ph.D., M.Com, MA(Psy), MBA, LL.B, CAIIB, PG DHRM, PG DMM, D TD, Pragya.
      With 18 years of experience in management teaching and 14 years as a trainer for Syndicate Bank, Dr. Shetty specializes in personality development and is an expert in NLP (Neuro-Linguistic Programming).
      He is one of the most sought-after trainers across many colleges and continues to inspire students with his deep knowledge and training skills.
    `,
  },
  {
    name: "Mr. Arjun R Prasad",
    position: "Principal Software Engineer, ARM Embedded Technologies",
    image:arjun,
    bio: `
      An Engineer by profession, Mr. Arjun has 17 years of teaching experience in Quantitative Aptitude and Logical Reasoning. 
      He has been imparting this knowledge to students at T.I.M.E for the last 10 years. 
      Mr. Arjun has over 19 years of experience in software development, managing teams in areas like design, development, and application implementation. 
      He is well-versed in Shell Scripting, Perl scripting, Makefiles, Test automation, Networking concepts, Data Structures, OS Concepts, DBMS, Fuzzy Logic, Design patterns, ANTLR, Memory Compilers design, and Software Configuration Management. 
      Mr. Arjun is currently working as a Principal Software Engineer at ARM Embedded Technologies Pvt Ltd.
    `,
  },
  {
    name: "Mr. Chandrahasan",
    position: "Trainer, Quantitative Aptitude & Reasoning",
    image: Chandrahasan,
    bio: `
      A B Tech graduate from IIT Madras (1st Class) and an MBA from IIM Calcutta, Mr. Chandrahasan has a vast experience in the corporate world, having shouldered various responsibilities.
      With a flair for teaching, he has been teaching for the last 16 years, specializing in Quantitative Aptitude and Reasoning, and also teaching management subjects.
    `,
  },
  {
    name: "Ms. Rashmi",
    position: "Trainer, Quantitative Aptitude & Reasoning",
    image: rashmi,
    bio: `
      Ms. Rashmi holds a BE in Telecommunication and an MBA in HR and Finance. 
      She specializes in Quantitative Aptitude and Reasoning and has been teaching for over 10 years. 
      Additionally, she has been practicing yoga and meditation for the last decade and incorporates these practices into her teaching to create thought-provoking sessions.
    `,
  },
  {
    name: "Ms. Shilpa Vijayendra",
    position: "Trainer, Communication Skills, GD & PI",
    image: shilpa,
    bio: `
      Ms. Shilpa holds an MBA in HR and has worked as the Centre Manager for T.I.M.E, Bangalore. 
      She has counselled numerous students and has been involved in marketing. 
      Ms. Shilpa has trained students from NITTE, MES, and MLA colleges, as well as students from government colleges, in Communication Skills, Group Discussions, and Personal Interviews. 
      She brings with her rich experience from the Toastmasters Club, Bangalore.
    `,
  },
];

export default facultyData;
