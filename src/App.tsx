import CartIcon from './assets/icon-cart.svg'

function App() {
  return (
    <div className="w-100 h-screen overflow-none flex justify-center items-center">
      <main className="w-[343px] h-[611px] lg:w-[600px] lg:h-[450px] bg-white rounded flex flex-col lg:flex-row">
        <div className="bg-parfum-bg-mobile lg:bg-parfum-bg-desktop bg-contain lg:flex-1 min-h-[240px] w-full rounded-l">
          <span className="sr-only">
            An image with a perfume on a white background, with some leaves
            around
          </span>
        </div>
        <div className="flex-1">
          <div className="p-6 lg:p-8">
            <h2 className="font-montserrat text-[12px] tracking-[5px] uppercase text-gray mb-3 lg:mb-5">
              Perfume
            </h2>
            <h1 className="font-fraunces font-bold leading-8 text-display text-metal mb-4 lg:mb-6">
              Gabrielle Essence Eau de Parfum
            </h1>
            <h2 className="font-montserrat text-body text-gray leading-6">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </h2>
            <div className="mt-6 mb-5 lg:my-6 flex items-center justify-start w-max gap-[19px]">
              <h1 className="font-fraunces text-aquamarine text-display font-bold leading-8">
                $149.00
              </h1>
              <h3 className="font-montserrat text-[13px] leading-6 text-gray line-through">
                $169.99
              </h3>
            </div>
            <button className="bg-aquamarine hover:bg-aquamarine-hover w-full h-12 rounded flex justify-center items-center text-white gap-3 font-montserrat font-bold">
              <img src={CartIcon} alt="Cart icon" />
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
