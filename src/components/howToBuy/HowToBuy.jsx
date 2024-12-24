const HowToBuy = () => {
  const isMobile = window.screen.width < 700;
  return (
    <div className="mt-20">
      <h1 className="text-xl underline">HOW TO BUY PRODUCTS?</h1>
      <div className="grid grid-rows-1 lg:grid-cols-2 items-center  ">
        <div className="p-4  mx-auto">
          <div className="flex">
            <div className="mr-4 flex flex-col items-center">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
                  1
                </div>
              </div>
              <div className="h-full w-px bg-gray-300 "></div>
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-xl font-bold ">Create Account</p>
              <p>
                Select account to set your profile by registering username,
                email and password
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="mr-4 flex flex-col items-center">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
                  2
                </div>
              </div>
              <div className="h-full w-px bg-gray-300 "></div>
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-xl font-bold text-gray-900 ">
                Select Item & Add to Cart
              </p>
              <p className="text-gray-600 dark:text-slate-400">
                Pick your product & add them in your cart, you can upgrade your
                cart by adding multiple products
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="mr-4 flex flex-col items-center">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
                  3
                </div>
              </div>
              <div className="h-full w-px bg-gray-300 "></div>
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-xl font-bold text-gray-900 ">
                Proceed to Checkout
              </p>
              <p className="text-gray-600 ">
                After adding in your cart, click on proceed to checkout for
                payment
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="mr-4 flex flex-col items-center">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
                  4
                </div>
              </div>
              <div className="h-full w-px bg-gray-300 "></div>
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-xl font-bold text-gray-900 ">
                Make Payment & Place Order
              </p>
              <p className="text-gray-600 ">
                Use Send money / Cash Out on the following payment methods, fill
                your transaction details and place your order.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="mr-4 flex flex-col items-center">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900 bg-blue-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-white dark:text-slate-200"
                  >
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="pt-1 ">
              <p className="mb-2 text-xl font-bold text-gray-900 ">Done!</p>
            </div>
          </div>
        </div>
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/903759540?h=9677daa9e2"
          
          width={isMobile ? 350 : 600}
          height={isMobile ? 200 : 600}
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default HowToBuy;
