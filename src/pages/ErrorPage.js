import React from 'react'

const ErrorPage = () => {
  return (
    <div className='w-full'>
        <div className='max-container min-h-screen flex justify-center items-center'>
            <div class="text-center">
                <h1 class="mb-4 text-6xl font-semibold text-fLetter">404</h1>
                <p class="mb-4 text-lg text-gray-600">Oops! Looks like you're lost.</p>
                <div class="animate-bounce">
                <svg class="mx-auto h-16 w-16 text-fLetter" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
                </div>
                <p class="mt-4 text-gray-600">Let's get you back <a href="/" class="text-fLetter">home</a>.</p>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage