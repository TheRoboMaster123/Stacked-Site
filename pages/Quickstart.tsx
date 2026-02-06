
import React from 'react';

const Quickstart = () => {
  return (
    <div className="bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-12">
            <article className="lg:col-span-3 prose lg:prose-lg max-w-none">
                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Quickstart Guide</h1>
                    <p className="mt-4 text-lg text-gray-500">Set up your workspace, create your first intake workflow, and publish a lender-ready Application Pack.</p>
                </header>

                <h2>What you'll set up</h2>
                <p>By the end of this guide, you will have:</p>
                <ul>
                    <li>A Stacked workspace with your team invited</li>
                    <li>One Application Pack (requirements + validation)</li>
                    <li>One Partner or Direct Intake Link ready</li>
                    <li>Your first CRM integration connected</li>
                </ul>

                <h2>Step 1: Create your workspace</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec sem ac libero elementum tristique. Vivamus interdum, justo et efficitur congue, nisi felis semper nunc, et consectetur magna felis a enim.</p>
                
                <figure className="my-10">
                    <div className="aspect-w-16 aspect-h-9 bg-black rounded-2xl flex items-center justify-center">
                        <p className="text-white text-2xl">Intro to Stacked Video</p>
                    </div>
                </figure>

                 <h2>Step 2: Invite your team and set roles</h2>
                 <p>Donec in velit vel ipsum auctor pulvinar. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>

            </article>
            <aside className="hidden lg:block relative">
                <div className="sticky top-24 p-6 border border-gray-200 rounded-2xl">
                    <h3 className="font-semibold">What you'll set up:</h3>
                    <ul className="mt-3 text-sm space-y-2 text-gray-600">
                        <li><a href="#" className="hover:text-black">Create your workspace</a></li>
                        <li><a href="#" className="hover:text-black">Invite your team and set roles</a></li>
                        <li><a href="#" className="hover:text-black">Common setup mistakes</a></li>
                        <li><a href="#" className="hover:text-black">Quick fixes</a></li>
                    </ul>
                </div>
            </aside>
        </div>
      </div>
    </div>
  );
};

export default Quickstart;
