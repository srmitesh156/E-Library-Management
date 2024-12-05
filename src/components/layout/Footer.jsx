

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-700">
           
            <div className="flex items-start space-x-4">
                <i className="fas fa-map-marker-alt text-blue-500 text-2xl"></i>
                <div>
                    <h4 className="text-lg font-semibold mb-2">Find us</h4>
                    <p>1010 Avenue, sw 54321, Chandigarh</p>
                </div>
            </div>
            
            <div className="flex items-start space-x-4">
                <i className="fas fa-phone text-blue-500 text-2xl"></i>
                <div>
                    <h4 className="text-lg font-semibold mb-2">Call us</h4>
                    <p>9876543210</p>
                </div>
            </div>
          
            <div className="flex items-start space-x-4">
                <i className="far fa-envelope-open text-blue-500 text-2xl"></i>
                <div>
                    <h4 className="text-lg font-semibold mb-2">Mail us</h4>
                    <p>mail@info.com</p>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          
            <div>
                <a href="index.html" className="block mb-4">
                    <img src="https://i.ibb.co/QDy827D/ak-logo.png" alt="logo" className="h-12"/>
                </a>
                <p className="text-gray-400 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="text-blue-500"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="text-blue-400"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-red-500"><i className="fab fa-google-plus-g"></i></a>
                </div>
            </div>

            
            <div>
                <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Portfolio</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                </ul>
            </div>

           
            <div>
                <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
                <p className="text-gray-400 mb-4">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                <form action="#" className="flex items-center space-x-2">
                    <input type="text" placeholder="Email Address" className="px-4 py-2 bg-gray-700 text-white focus:outline-none w-full"/>
                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white">
                        <i className="fab fa-telegram-plane"></i>
                    </button>
                </form>
            </div>
        </div>
    </div>

    <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm text-center md:text-left">&copy; 2018, All Rights Reserved <a href="https://codepen.io/anupkumar92/" className="text-blue-500">Anup</a></p>
            <ul className="flex space-x-4 text-sm mt-4 md:mt-0">
                <li><a href="#" className="text-gray-500 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white">Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white">Contact</a></li>
            </ul>
        </div>
    </div>
</footer>

  )
}

export default Footer