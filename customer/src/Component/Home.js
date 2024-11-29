// // // import React from 'react';
// // // import { Search, ShoppingCart, Menu, ChevronDown, Star } from 'lucide-react';

// // // export default function HomePage() {
// // //   return (
// // //     <div className="min-h-screen bg-gray-100">
// // //       {/* Header */}
// // //       <header className="bg-gray-900 text-white">
// // //         <div className="container mx-auto px-4 py-2 flex items-center justify-between">
// // //           <div className="flex items-center">
// // //             <img src="/placeholder.svg" alt="Amazon Logo" className="mr-4" style={{ width: '100px', height: '40px' }} />
// // //             <div className="hidden md:flex items-center">
// // //               <Menu className="mr-2" />
// // //               <span>All</span>
// // //             </div>
// // //           </div>
// // //           <div className="flex-1 mx-4">
// // //             <div className="relative">
// // //               <input type="text" placeholder="Search Amazon" className="w-full py-2 px-4 rounded-md text-black" />
// // //               <Search className="absolute right-3 top-2.5 text-gray-500" />
// // //             </div>
// // //           </div>
// // //           <div className="flex items-center">
// // //             <div className="hidden md:block mr-4">
// // //               <div className="text-xs">Hello, sign in</div>
// // //               <div className="font-bold">Account & Lists <ChevronDown className="inline" size={12} /></div>
// // //             </div>
// // //             <div className="hidden md:block mr-4">
// // //               <div className="text-xs">Returns</div>
// // //               <div className="font-bold">& Orders</div>
// // //             </div>
// // //             <div className="flex items-center">
// // //               <ShoppingCart size={24} />
// // //               <span className="ml-1 font-bold">Cart</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </header>

// // //       {/* Main Content */}
// // //       <main className="container mx-auto px-4 py-8">
// // //         {/* Hero Section */}
// // //         <div className="relative mb-8">
// // //           <img src="/placeholder.svg" alt="Hero Image" className="w-full rounded-lg" style={{ height: '400px' }} />
// // //           <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
// // //           <div className="absolute bottom-4 left-4 text-white">
// // //             <h1 className="text-4xl font-bold mb-2">Welcome to Amazon</h1>
// // //             <p className="text-xl">Discover amazing deals</p>
// // //           </div>
// // //         </div>

// // //         {/* Product Categories */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // //           {['Electronics', 'Fashion', 'Home & Kitchen', 'Books'].map((category) => (
// // //             <div key={category} className="bg-white p-4 rounded-lg shadow">
// // //               <h2 className="text-xl font-bold mb-4">{category}</h2>
// // //               <div className="grid grid-cols-2 gap-2">
// // //                 {[1, 2, 3, 4].map((item) => (
// // //                   <div key={item} className="bg-gray-200 aspect-square rounded-md"></div>
// // //                 ))}
// // //               </div>
// // //               <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">Shop now</a>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Featured Products */}
// // //         <div className="mt-8">
// // //           <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // //             {[1, 2, 3, 4].map((product) => (
// // //               <div key={product} className="bg-white p-4 rounded-lg shadow">
// // //                 <div className="bg-gray-200 aspect-square rounded-md mb-4"></div>
// // //                 <h3 className="font-bold mb-2">Product Name</h3>
// // //                 <div className="flex items-center mb-2">
// // //                   {[1, 2, 3, 4, 5].map((star) => (
// // //                     <Star key={star} size={16} className="text-yellow-400 fill-current" />
// // //                   ))}
// // //                   <span className="text-sm text-gray-600 ml-1">(123)</span>
// // //                 </div>
// // //                 <div className="font-bold text-lg">$99.99</div>
// // //                 <button className="mt-2 w-full bg-yellow-400 text-gray-900 py-2 rounded-md hover:bg-yellow-500 transition-colors">
// // //                   Add to Cart
// // //                 </button>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </main>

// // //       {/* Footer */}
// // //       <footer className="bg-gray-900 text-white py-8">
// // //         <div className="container mx-auto px-4">
// // //           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
// // //             <div>
// // //               <h3 className="font-bold mb-4">Get to Know Us</h3>
// // //               <ul className="space-y-2">
// // //                 <li><a href="#" className="hover:underline">Careers</a></li>
// // //                 <li><a href="#" className="hover:underline">About Amazon</a></li>
// // //                 <li><a href="#" className="hover:underline">Investor Relations</a></li>
// // //               </ul>
// // //             </div>
// // //             <div>
// // //               <h3 className="font-bold mb-4">Make Money with Us</h3>
// // //               <ul className="space-y-2">
// // //                 <li><a href="#" className="hover:underline">Sell products on Amazon</a></li>
// // //                 <li><a href="#" className="hover:underline">Sell apps on Amazon</a></li>
// // //                 <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
// // //               </ul>
// // //             </div>
// // //             <div>
// // //               <h3 className="font-bold mb-4">Amazon Payment Products</h3>
// // //               <ul className="space-y-2">
// // //                 <li><a href="#" className="hover:underline">Amazon Rewards Visa Signature Cards</a></li>
// // //                 <li><a href="#" className="hover:underline">Amazon.com Store Card</a></li>
// // //                 <li><a href="#" className="hover:underline">Amazon Business Card</a></li>
// // //               </ul>
// // //             </div>
// // //             <div>
// // //               <h3 className="font-bold mb-4">Let Us Help You</h3>
// // //               <ul className="space-y-2">
// // //                 <li><a href="#" className="hover:underline">Your Account</a></li>
// // //                 <li><a href="#" className="hover:underline">Your Orders</a></li>
// // //                 <li><a href="#" className="hover:underline">Shipping Rates & Policies</a></li>
// // //               </ul>
// // //             </div>
// // //           </div>
// // //           <div className="mt-8 text-center">
// // //             <img src="/placeholder.svg" alt="Amazon Logo" className="mx-auto mb-4" style={{ width: '100px', height: '40px' }} />
// // //             <p>&copy; 2023 Amazon Clone. All rights reserved.</p>
// // //           </div>
// // //         </div>
// // //       </footer>
// // //     </div>
// // //   );
// // // }



// // import React from 'react'
// // import { Search, ShoppingCart, ChevronDown, User, Heart, Gift, HelpCircle, Menu } from 'lucide-react'

// // export default function HomePage() {
// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       {/* Header */}
// //       <header className="bg-blue-500 text-white">
// //         <div className="container mx-auto px-4 py-2">
// //           <div className="flex items-center justify-between">
// //             <div className="flex items-center">
// //  <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart Logo" className="h-7 mr-4" /> 
// //               <div className="relative">
// //                 <input type="text" placeholder="Search for products, brands and more" className="w-96 py-2 px-4 rounded-sm text-black" />
// //                 <Search className="absolute right-3 top-2.5 text-blue-500" />
// //               </div>
// //             </div>
// //             <nav className="flex items-center space-x-6">
// //               <a href="#" className="flex items-center hover:text-gray-200">
// //                 <User className="mr-1" size={20} />
// //                 <span>Login</span>
// //               </a>
// //               <a href="#" className="flex items-center hover:text-gray-200">
// //                 <ShoppingCart className="mr-1" size={20} />
// //                 <span>Cart</span>
// //               </a>
// //               <a href="#" className="flex items-center hover:text-gray-200">
// //                 <Gift className="mr-1" size={20} />
// //                 <span>Become a Seller</span>
// //               </a>
// //               <a href="#" className="flex items-center hover:text-gray-200">
// //                 <HelpCircle className="mr-1" size={20} />
// //                 <span>More</span>
// //                 <ChevronDown size={16} />
// //               </a>
// //             </nav>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Category Navigation */}
// //       <nav className="bg-white shadow">
// //         <div className="container mx-auto px-4 py-2">
// //           <ul className="flex justify-between items-center">
// //             {['Electronics', 'TVs & Appliances', 'Men', 'Women', 'Baby & Kids', 'Home & Furniture', 'Sports, Books & More'].map((category) => (
// //               <li key={category} className="text-sm font-medium">
// //                 <a href="#" className="flex items-center hover:text-blue-500">
// //                   {category}
// //                   <ChevronDown size={16} className="ml-1" />
// //                 </a>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </nav>

// //       {/* Main Content */}
// //       <main className="container mx-auto px-4 py-8">
// //         {/* Hero Section */}
// //         <div className="relative mb-8">
// //           <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4cd6690ef44564f3.jpg?q=20" alt="Hero Image" className="w-full rounded-lg" />
// //         </div>

// //         {/* Product Categories */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
// //           {['Mobiles', 'Fashion', 'Electronics', 'Home'].map((category) => (
// //             <div key={category} className="bg-white p-4 rounded-lg shadow">
// //               <h2 className="text-lg font-bold mb-4">{category}</h2>
// //               <div className="grid grid-cols-2 gap-2">
// //                 {[1, 2, 3, 4].map((item) => (
// //                   <div key={item} className="bg-gray-200 aspect-square rounded-md"></div>
// //                 ))}
// //               </div>
// //               <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">View All</a>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Featured Products */}
// //         <div className="mb-8">
// //           <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
// //             {[1, 2, 3, 4, 5].map((product) => (
// //               <div key={product} className="bg-white p-4 rounded-lg shadow">
// //                 <div className="bg-gray-200 aspect-square rounded-md mb-4"></div>
// //                 <h3 className="font-medium mb-2">Product Name</h3>
// //                 <div className="text-green-600 font-bold mb-1">₹999</div>
// //                 <div className="text-sm text-gray-500">Brand Name</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Deals of the Day */}
// //         <div>
// //           <h2 className="text-2xl font-bold mb-4">Deals of the Day</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// //             {[1, 2, 3, 4].map((deal) => (
// //               <div key={deal} className="bg-white p-4 rounded-lg shadow">
// //                 <div className="bg-gray-200 aspect-video rounded-md mb-4"></div>
// //                 <h3 className="font-medium mb-2">Deal Title</h3>
// //                 <div className="text-green-600 font-bold mb-1">Up to 50% Off</div>
// //                 <div className="text-sm text-gray-500">Category Name</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </main>

// //       {/* Footer */}
// //       <footer className="bg-gray-800 text-white py-8">
// //         <div className="container mx-auto px-4">
// //           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
// //             <div>
// //               <h3 className="font-bold mb-4">ABOUT</h3>
// //               <ul className="space-y-2 text-sm">
// //                 <li><a href="#" className="hover:underline">Contact Us</a></li>
// //                 <li><a href="#" className="hover:underline">About Us</a></li>
// //                 <li><a href="#" className="hover:underline">Careers</a></li>
// //                 <li><a href="#" className="hover:underline">Flipkart Stories</a></li>
// //                 <li><a href="#" className="hover:underline">Press</a></li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h3 className="font-bold mb-4">HELP</h3>
// //               <ul className="space-y-2 text-sm">
// //                 <li><a href="#" className="hover:underline">Payments</a></li>
// //                 <li><a href="#" className="hover:underline">Shipping</a></li>
// //                 <li><a href="#" className="hover:underline">Cancellation & Returns</a></li>
// //                 <li><a href="#" className="hover:underline">FAQ</a></li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h3 className="font-bold mb-4">POLICY</h3>
// //               <ul className="space-y-2 text-sm">
// //                 <li><a href="#" className="hover:underline">Return Policy</a></li>
// //                 <li><a href="#" className="hover:underline">Terms Of Use</a></li>
// //                 <li><a href="#" className="hover:underline">Security</a></li>
// //                 <li><a href="#" className="hover:underline">Privacy</a></li>
// //                 <li><a href="#" className="hover:underline">Sitemap</a></li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h3 className="font-bold mb-4">SOCIAL</h3>
// //               <ul className="space-y-2 text-sm">
// //                 <li><a href="#" className="hover:underline">Facebook</a></li>
// //                 <li><a href="#" className="hover:underline">Twitter</a></li>
// //                 <li><a href="#" className="hover:underline">YouTube</a></li>
// //               </ul>
// //             </div>
// //           </div>
// //           <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-center">
// //             <p>&copy; 2023 Flipkart Clone. All rights reserved.</p>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   )
// // }     

// import React from 'react'

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="sticky top-0 z-50 bg-white shadow-md">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <div className="text-3xl font-extrabold">TNP Ecom</div>
//           <nav className="hidden md:flex space-x-8">
//             <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">MEN</a>
//             <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">WOMEN</a>
//             <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">KIDS</a>
//             <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">HOME</a>
//           </nav>
//           <div className="flex items-center space-x-4">
//             <div className="relative hidden md:block">
//               <input
//                 type="search"
//                 placeholder="Search Products"
//                 className="pl-10 pr-4 py-2 w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
//               />
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
//               </svg>
//             </div>
//             <button className="text-gray-600 hover:text-indigo-600 transition duration-300">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//               </svg>
//             </button>
//             <button className="text-gray-600 hover:text-indigo-600 transition duration-300">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//               </svg>
//             </button>
//             <button className="text-gray-600 hover:text-indigo-600 transition duration-300">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative h-[600px] overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1440778303588-435521a205bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Summer Collection"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="text-center">
//             <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-down">Summer Vibes</h1>
//             <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in-up">Discover the hottest trends of the season</p>
//             <button className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300 transform hover:scale-105">
//               Shop Now
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Category Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-12 text-center">Shop By Category</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {['Men', 'Women', 'Kids', 'Home'].map((category) => (
//               <div key={category} className="group cursor-pointer">
//                 <div className="relative overflow-hidden rounded-lg shadow-lg">
//                   <img
//                     src={`https://via.placeholder.com/300?text=${category}`}
//                     alt={category}
//                     className="w-full h-64 object-cover transition duration-300 transform group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
//                     <button className="bg-white text-indigo-600 font-semibold py-2 px-4 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300">
//                       Shop {category}
//                     </button>
//                   </div>
//                 </div>
//                 <h3 className="mt-4 text-xl font-semibold text-center">{category}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Products */}
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-12 text-center">Featured Products</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[1, 2, 3, 4, 5, 6, 7, 8].map((product) => (
//               <div key={product} className="bg-white rounded-lg shadow-md overflow-hidden group">
//                 <div className="relative">
//                   <img
//                     src={`https://via.placeholder.com/300?text=Product+${product}`}
//                     alt={`Product ${product}`}
//                     className="w-full h-64 object-cover"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
//                     <button className="bg-white text-indigo-600 font-semibold py-2 px-4 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300">
//                       Quick View
//                     </button>
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-semibold text-lg mb-2">Product Name</h3>
//                   <p className="text-sm text-gray-600 mb-2">Brand Name</p>
//                   <div className="flex justify-between items-center">
//                     <span className="font-bold text-indigo-600">₹999</span>
//                     <button className="text-gray-600 hover:text-indigo-600 transition duration-300">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Newsletter */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="bg-indigo-600 py-16 px-8 rounded-lg text-white text-center">
//             <h2 className="text-4xl font-bold mb-6">Stay in the loop</h2>
//             <p className="text-lg mb-8">Subscribe to our newsletter and receive updates on new products and special offers.</p>
//             <div className="max-w-lg mx-auto">
//               <div className="flex">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full rounded-l-full py-3 px-4 text-gray-800 focus:outline-none"
//                 />
//                 <button className="bg-white text-indigo-600 font-semibold rounded-r-full px-8 py-3 hover:bg-indigo-500 hover:text-white transition duration-300">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 bg-gray-800">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap justify-between">
//             <div className="text-white mb-6">
//               <h3 className="font-bold text-xl mb-4">TNP Ecom</h3>
//               <p>© 2024 All rights reserved.</p>
//             </div>
//             <div className="text-white mb-6">
//               <h4 className="font-semibold mb-2">Quick Links</h4>
//               <ul>
//                 <li><a href="#" className="hover:underline">Contact Us</a></li>
//                 <li><a href="#" className="hover:underline">Privacy Policy</a></li>
//                 <li><a href="#" className="hover:underline">Terms of Service</a></li>
//               </ul>
//             </div>
//             <div className="text-white mb-6">
//               <h4 className="font-semibold mb-2">Follow Us</h4>
//               <div className="flex space-x-4">
//                 <a href="#" className="hover:text-indigo-600">Facebook</a>
//                 <a href="#" className="hover:text-indigo-600">Instagram</a>
//                 <a href="#" className="hover:text-indigo-600">Twitter</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// // }    







import { useState } from 'react';
import { Search, ShoppingBag, User, Heart, Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ShoppersStopHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const categories = ["Women", "Men", "Kids", "Beauty", "Watches", "Homestop"];
  const featuredCategories = [
    { name: "Women's Fashion", image: "https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.webp?a=1&b=1&s=612x612&w=0&k=20&c=MWHIpO64lcmoSY0gJwyMP1MNkgr_skCWnQ_Q4Qxd4RM=" },
    { name: "Men's Fashion", image: "https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.webp?a=1&b=1&s=612x612&w=0&k=20&c=e0bOeR004rMmcAvXUYAIiJZJ01pgAFX7ThFqfzyvMac=" },
    { name: "Kids' Fashion", image: "https://media.istockphoto.com/id/172445408/photo/multiple-group-of-six-indian-children-only-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=HEaUv13vyRExTNoSAzIUN9RAxQ7d2vmafpQxySadXsE=" },
    { name: "Beauty", image: "https://media.istockphoto.com/id/1296705483/photo/make-up-products-prsented-on-white-podiums-on-pink-pastel-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=mNnGcFuqTVVuHJ6EInCGiEuJYrpmHjXnZFaQBUXSxGY=" },
  ];
  
  const deals = [
    { title: "Up to 50% Off", category: "Clothing", image: "https://images.unsplash.com/photo-1624192647570-1131acc12ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sdGglMjBEZWFsc3xlbnwwfHwwfHx8MA%3D%3D" },
    { title: "Buy 2 Get 1 Free", category: "Accessories", image: "https://media.istockphoto.com/id/1156397327/photo/mobile-kit-with-smartphone-headphones-and-chargers.webp?a=1&b=1&s=612x612&w=0&k=20&c=-uoK7yK1NIqyvugUBExxogTnwSTSazn0ENqzmCMzNa8=" },
    { title: "New Arrivals", category: "Footwear", image: "/placeholder.svg?height=300&width=200" },
  ];

  const trendingProducts = [
    { name: "Floral Dress", brand: "Stop", price: "₹1,999", image: "/placeholder.svg?height=300&width=200" },
    { name: "Slim Fit Shirt", brand: "Life", price: "₹1,499", image: "/placeholder.svg?height=300&width=200" },
    { name: "Running Shoes", brand: "Puma", price: "₹3,999", image: "/placeholder.svg?height=300&width=200" },
    { name: "Leather Watch", brand: "Fossil", price: "₹7,995", image: "/placeholder.svg?height=300&width=200" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Section */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <img src="/placeholder.svg?height=40&width=160" alt="Shoppers Stop Logo" className="h-10" />
              <nav className="hidden md:block">
                <ul className="flex space-x-6 text-sm font-medium">
                  {categories.map((category) => (
                    <li key={category} className="group relative">
                      <a href="#" className="hover:text-red-600 transition-colors flex items-center">
                        {category}
                        <ChevronDown className="h-4 w-4 ml-1" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center space-x-6">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search for products & brands"
                  className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="flex items-center space-x-4">
                <a href="#" className="hidden md:flex flex-col items-center text-xs">
                  <User className="h-6 w-6" />
                  <span>Account</span>
                </a>
                <a href="#" className="hidden md:flex flex-col items-center text-xs">
                  <Heart className="h-6 w-6" />
                  <span>Wishlist</span>
                </a>
                <a href="#" className="flex flex-col items-center text-xs">
                  <ShoppingBag className="h-6 w-6" />
                  <span>Bag</span>
                </a>
                <button
                  onClick={() => navigate('/login')}
                  className="bg-red-600 text-white px-4 py-2 rounded-full"
                >
                  Login
                </button>
              </div>
              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-6 w-6" />
              </button>
              <button className="md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-8">
              <img src="/placeholder.svg?height=40&width=160" alt="Shoppers Stop Logo" className="h-10" />
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav>
              <ul className="space-y-4">
                {categories.map((category) => (
                  <li key={category}>
                    <a href="#" className="text-lg font-medium hover:text-red-600 transition-colors">{category}</a>
                  </li>
                ))}
                <li>
                  <a href="#" className="text-lg font-medium hover:text-red-600 transition-colors">Login</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-70 md:hidden">
          <div className="fixed left-0 top-0 w-64 bg-white h-full p-4">
            <button onClick={() => setIsSidebarOpen(false)}>
              <X className="h-6 w-6 text-red-600" />
            </button>
            <nav>
              <ul className="space-y-4">
                {categories.map((category) => (
                  <li key={category}>
                    <a href="#" className="text-lg font-medium hover:text-red-600 transition-colors">{category}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* Featured Categories Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {featuredCategories.map((category) => (
              <div key={category.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deals Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Deals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {deals.map((deal) => (
              <div key={deal.title} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={deal.image} alt={deal.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{deal.title}</h3>
                  <p className="text-gray-600">{deal.category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Products Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Trending Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {trendingProducts.map((product) => (
              <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.brand}</p>
                  <p className="text-red-600 font-bold">{product.price}</p>
                  <button className="mt-2 w-full bg-red-600 text-white py-2 rounded-full">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2024 Shoppers Stop. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ShoppersStopHome;





// import { useState } from 'react';
// import { Search, ShoppingBag, User, Heart, Menu, X } from 'lucide-react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// export default function ModernMyntraHome() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const categories = [
//     { name: "Men", image: "https://media.istockphoto.com/id/1614454660/photo/male-model-posing-in-green-kurta.jpg?s=612x612&w=0&k=20&c=XN-4lHZ3MCT69pUm5hGyPllw94OJ0JsZbSosYSwnXOU=" },
//     { name: "Women", image: "https://media.istockphoto.com/id/1489381517/photo/portrait-of-gorgeous-brunette-woman-standing-city-street-fashion-model-wears-black-leather.jpg?s=612x612&w=0&k=20&c=Ji-vXNMVdjtgiO0ZH1B5d5BbIhmpwngkhx1u4QaiG1g=" },
//     { name: "Kids", image: "https://media.istockphoto.com/id/1396160859/photo/baby-and-child-clothes-toys-in-box-second-hand-apparel-idea-circular-fashion-donation-charity.jpg?s=612x612&w=0&k=20&c=cjKWIeNfmEPVdQUBABIWSdGAvm5SUoEdQYB02XOI35c=" },
//     { name: "Home & Living", image: "https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo=" },
//     { name: "Beauty", image: "https://media.istockphoto.com/id/1296705483/photo/make-up-products-prsented-on-white-podiums-on-pink-pastel-background.jpg?s=612x612&w=0&k=20&c=j3Vfpo81L5I2g0uJ5tArBC3l_fcPtPAcLzzT4pq5BLY=" },
//   ];

//   const trendingNow = [
//     { title: "Summer Dresses", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVucyUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D", price: "₹999" },
//     { title: "Sneakers", image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNuZWFrZXJzfGVufDB8fDB8fHww", price: "₹2499" },
//     { title: "Accessories", image: "https://images.unsplash.com/photo-1631872112096-7b1b700237f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFjY2Vzc29yaWVzfGVufDB8fDB8fHww", price: "₹499" },
//     { title: "Formal Wear", image: "https://media.istockphoto.com/id/890289344/photo/the-perfect-outfit-means-a-perfect-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=lXVxkET-3Yjmo2t_4Vripyub-2H0Y6TsK9QfSiDf7uk=", price: "₹3999" },
//   ];

//   const summerSaleImages = [
//     'https://images-eu.ssl-images-amazon.com/images/G/31/img24/PB/Jupiter24/PC_Hero_3000x1200_Lifestyle_101._CB543325092_.jpg',
//     'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/Jupiter24/Phase3/ATF/Shoes/3000_u._CB543179013_.jpg',
//     'https://images-eu.ssl-images-amazon.com/images/G/31/img22/pcacc/jup3/399_3A_PC_Hero_3000x1200._CB545061107_.jpg',
//     'https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2024/Jupiter/Phase3/GW/Hero/PC/Unrec/78222._CB545111695_.png',
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="bg-white shadow-sm sticky top-0 z-50">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-8">
//               <img src="https://img.icons8.com/?size=80&id=E3j7OrG7shvH&format=png" alt="ShopingAdda" className="h-8" />
//               <nav className="hidden md:block">
//                 <ul className="flex space-x-6 text-sm font-medium">
//                   {categories.map((category) => (
//                     <li key={category.name}>
//                       <a href="#" className="hover:text-pink-500 transition-colors">{category.name}</a>
//                     </li>
//                   ))}
//                 </ul>
//               </nav>
//             </div>
//             <div className="flex items-center space-x-6">
//               <div className="relative hidden md:block">
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   className="pl-10 pr-4 py-2 w-64 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                 />
//                 <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//               </div>
//               <div className="flex items-center space-x-4">
//                 <a href="/login" className="hidden md:flex flex-col items-center text-xs">
//                   <User className="h-6 w-6" />
//                   <span>Log In</span>
//                 </a>
//                 <a href="#" className="hidden md:flex flex-col items-center text-xs">
//                   <Heart className="h-6 w-6" />
//                   <span>Wishlist</span>
//                 </a>
//                 <a href="#" className="flex flex-col items-center text-xs">
//                   <ShoppingBag className="h-6 w-6" />
//                   <span>Bag</span>
//                 </a>
//               </div>
//               <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                 <Menu className="h-6 w-6" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {isMenuOpen && (
//         <div className="fixed inset-0 z-50 bg-white md:hidden">
//           <div className="container mx-auto px-4 py-4">
//             <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
//               <X className="h-6 w-6" />
//             </button>
//             <ul className="flex flex-col space-y-4 mt-8">
//               {categories.map((category) => (
//                 <li key={category.name}>
//                   <a href="#" className="text-lg">{category.name}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}

//       <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
//         {summerSaleImages.map((image, index) => (
//           <div key={index}>
//             <img src={image} alt={`Summer Sale ${index + 1}`} />
//           </div>
//         ))}
//       </Carousel>

//       <section className="container mx-auto px-4 py-8">
//         <h2 className="text-2xl font-semibold mb-4">Trending Now</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {trendingNow.map((item) => (
//             <div key={item.title} className="bg-white rounded-lg shadow-md overflow-hidden">
//               <img src={item.image} alt={item.title} className="w-full h-32 object-cover" />
//               <div className="p-4">
//                 <h3 className="text-lg font-medium">{item.title}</h3>
//                 <p className="text-gray-500">{item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
