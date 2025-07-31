import React from 'react'

export const About = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-400 to-pink-100 p-6 ">
        <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-xl shadow-xl p-8 ">
        <div className='text-4xl text-center'>❤️❤️</div>
        <h1 className='text-center font-extrabold text-4xl text-violet-600'> AURALIST</h1>
        <p className='text-2xl text-white font-bold'>
           AuraList is a digital canvas for tracking not just tasks, but the moods, moments, and memories that shape our day-to-day flow. Designed with vibrancy and intention, it transforms routine list-making into a personalized experience of emotional clarity and creative expression. Whether you're logging fleeting thoughts, mapping out goals, or curating your aura for the day, each entry becomes a snapshot of your inner world—color-coded, time-stamped, and open to reflection. Built with React and styled using Tailwind CSS, the interface invites you to engage with your data intuitively: update, edit, or delete entries with ease, and create new ones at the tap of a button. AuraList isn't just about productivity—it's about presence. It's for dreamers, planners, artists, and analysts alike, offering a playful, inclusive space to record life’s rhythm in a way that’s both structured and soulful. Every title is a breadcrumb toward understanding what your day felt like—and why that matters.
        </p>
     
        <ul  className='m-4 text-white font-bold text-lg
        bg-red/20 backdrop-blur-md rounded-xl shadow-xl p-4'>
          <li>❤️Click on Create to add your tasks</li>
          <li>❤️Click on Tasks to view your tasks</li>
          <li>❤️Click on About to view this page</li>
          <li>❤️Click on Update to update your tasks</li>
          <li>❤️Click on Delete to delete your tasks</li>
          <li>❤️Click on Mark done to mark your tasks as done</li>

          <li>❤️Once Mark done cannot be Undone,if you want to undone then you have to update your Tasks</li>
        </ul>
        <h1 className='text-2xl text-red-500 m-4  font-bold 
        bg-red/20 backdrop-blur-md rounded-xl shadow-xl p-4'>By VISHAKHA SHARMA </h1>
        
        
        </div>
      </div>
    
    </>
  )
}
