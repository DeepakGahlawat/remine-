import React from 'react'

const Features = () => {
  return (
    <div>
      <section class="container mx-auto px-6 p-10">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
        Features
      </h2>
      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2">
          <h4 class="text-3xl text-gray-800 font-bold mb-3">Exercise Metric</h4>
          <p class="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch is able to capture you vitals while you exercise. You can create different category of exercises and can track your vitals on the go.</p>
        </div>
        <div class="w-full md:w-1/2">
          <img src="icons/recycle.jpg" alt="Monitoring" />
        </div>
      </div>

      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2">
          <img src="icons/li.jpg" alt="Reporting" className='w-[80%]'/>
        </div>
        <div class="w-full md:w-1/2 pl-10">
          <h4 class="text-3xl text-gray-800 font-bold mb-3">Reporting</h4>
          <p class="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch can generate a comprehensive report on your vitals depending on your settings either daily, weekly, monthly, quarterly or yearly.</p>
        </div>
      </div>

      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2">
          <h4 class="text-3xl text-gray-800 font-bold mb-3">Syncing</h4>
          <p class="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch allows you to sync data across all your mobile devices whether iOS, Android or Windows OS and also to your laptop whether MacOS, GNU/Linux or Windows OS.</p>
        </div>
        <div class="w-full md:w-1/2">
          <img src="icons/green.jpeg" alt="Syncing" className='object-cover w-[80%]'/>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Features
