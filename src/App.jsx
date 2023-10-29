import img from "./assets/newsletter-sign-up-with-success-message-main/assets/images/illustration-sign-up-desktop.svg";

function App() {
  return (
    <>
      <main className="font-Roboto flex justify-center min-h-screen bg-[#36384d]">
        <div className="flex flex-row w-[48.8%] h-[40rem] bg-white rounded-[2.2rem] my-[13.8rem]">
          <aside className="w-1/2 flex justify-center">
            <div className="flex flex-col pt-20 pl-[4rem]">
              <h1 className="text-[3.5rem] text-slate-800 font-[700] mb-[0.7rem]">
                Stay updated!
              </h1>
              <p className=" text-slate-800 mb-6">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <ul className="font-[500]">
                <li className="flex flex-row mb-[0.7rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                  >
                    <g fill="none">
                      <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                      <path
                        stroke="#FFF"
                        stroke-width="2"
                        d="M6 11.381 8.735 14 15 8"
                      />
                    </g>
                  </svg>
                  <span className="ml-4">
                    Product discovery and building what matters
                  </span>
                </li>
                <li className="flex flex-row mb-[0.6rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                  >
                    <g fill="none">
                      <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                      <path
                        stroke="#FFF"
                        stroke-width="2"
                        d="M6 11.381 8.735 14 15 8"
                      />
                    </g>
                  </svg>
                  <span className="ml-4">
                    Measuring to ensure updates are a success
                  </span>
                </li>
                <li className="flex flex-row ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                  >
                    <g fill="none">
                      <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                      <path
                        stroke="#FFF"
                        stroke-width="2"
                        d="M6 11.381 8.735 14 15 8"
                      />
                    </g>
                  </svg>
                  <span className="ml-4 mb-10">And much more!</span>
                </li>
              </ul>
              <form action="" className="flex flex-col mr-6">
                <span className="text-xs font-[700] mb-2">Email address</span>
                <input
                  type="email"
                  placeholder="email@company.com"
                  className="border w-full py-4 rounded-xl px-6 mb-6"
                />
                <button className="py-4 font-[500] text-white bg-slate-800 rounded-lg mb-2">
                  Subscribe to monthly newsletter
                </button>
              </form>
            </div>
          </aside>
          <aside className="w-1/2 flex justify-center">
            <img src={img} alt="img" className="w-[25rem] ml-[1rem]" />
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
