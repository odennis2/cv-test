'use client'
import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAcs_Xmk1lpdVH7FiPPrYHTWwhAIjKmJgY",
  authDomain: "oscar-online-cv.firebaseapp.com",
  projectId: "oscar-online-cv",
  storageBucket: "oscar-online-cv.firebasestorage.app",
  messagingSenderId: "119568961333",
  appId: "1:119568961333:web:fd9e2a772bcf3f1cf9067c",
  measurementId: "G-DWQ12JJZPY",
};

const app = initializeApp(firebaseConfig);

export default function Home() {
  
useEffect(() => {
  const initializeAnalytics = async () => {
    if (await isSupported()) {
      getAnalytics(app);
    }
  };

  initializeAnalytics();
}, []);
  return (
    <div className="items-center justify-items-left gap-16 font-[family-name:var(--font-sans)] text-black">
      <div className="absolute inset-10 border-1 bg-white">
        <div className="border-2 bg-main-pattern h-full p-8 bg-cover bg-no-repeat bg-center">
          <main className="flex flex-col gap-8 items-center sm:items-start m-7">
            <div>
              <h1 className="text-5xl">Oscar Dennis</h1>
              <h3>Software Developer</h3>
            </div>
            <div>
              <ol className="list-disc">
                <li>
                  <a
                    className="hover:underline hover:underline-offset-4"
                    href="https://github.com/odennis2?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline hover:underline-offset-4"
                    href="mailto:oscard@live.dk"
                    target="_blank"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline hover:underline-offset-4"
                    href="https://www.linkedin.com/in/oscar-dennis-593119283/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ol>
            </div>
          </main>

          <div className="absolute bottom-2 right-2 p-20 text-right max-w-md">
            <a>
              Born 1999 in Denmark. Focus on independent and team development
              with an eye on Generative AI and its implementations.
            </a>
          </div>
        </div>
      </div>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
