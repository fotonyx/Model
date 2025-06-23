import { useState } from "react";
import { Instagram, Facebook, Phone, Mail } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Photos/white.png";

const Footer = () => {
    const [showModal, setShowModal] = useState(null); 

    const footerNavs = [
        {
            label: "Photography Services",
            items: [
                { href: '/portfolio', name: 'Wedding Photography' },
                { href: '/portfolio', name: 'Portrait Photography' },
                { href: '/portfolio', name: 'Event Photography' },
                { href: '/portfolio', name: 'Real Estate Photography' },
                { href: '/portfolio', name: 'Product Photography' },
            ],
        },
    ];

    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-black text-gray-300">
            <footer className="px-4 py-5 max-w-screen-xl mx-auto md:px-8">
                <div className="gap-6 justify-between md:flex">
                    <div className="flex-1">
                        <div className="max-w-xs px-2">
                        <img
  src={logo}
  alt="FOTONYX Logo"
  className="w-32 md:w-48 cursor-pointer" 
  onClick={scrollToTop}
/>

                            <p className="leading-relaxed mt-2 text-[15px]">
                                Capturing the moments that matter. Specializing in wedding, portrait, and event photography.
                            </p>
                        </div>

                        <form action="https://formsubmit.co/support@fotonyx.in" method="POST">
                            <label className="block pt-4 pb-2 text-white">Stay up to date with our latest work</label>
                            <div className="max-w-sm flex items-center border border-gray-600 rounded-md p-1">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full p-2.5 outline-none bg-black text-white placeholder-gray-400"
                                />
                                <button className="p-2.5 rounded-md text-white bg-indigo-600 shadow-md hover:bg-indigo-700 sm:px-5">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="flex-1 mt-10 space-y-6 items-start justify-between sm:flex md:space-y-0 md:mt-0">
                        {footerNavs.map((item, idx) => (
                            <ul key={idx} className="space-y-4">
                                <h4 className="text-white font-medium">{item.label}</h4>
                                {item.items.map((el, index) => (
                                    <li key={index}>
                                        <a href={el.href} className="hover:underline hover:text-indigo-400">
                                            {el.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ))}

                        <ul className="space-y-4">
                            <h4 className="text-white font-medium">Contact</h4>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <a href="mailto:support@fotonyx.in" className="hover:underline hover:text-indigo-400">
                                    support@fotonyx.in
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                <a href="tel:+919944200250" className="hover:underline hover:text-indigo-400">
                                    +91 99442 00250
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 py-6 border-t border-gray-700 items-center justify-between sm:flex">
                    <div className="mt-4 sm:mt-0 text-sm">
                        &copy; {currentYear}{" "}
                        <Link
                            to="/"
                            onClick={scrollToTop}
                            className="text-blue-500 hover:underline hover:text-indigo-400 transition"
                        >
                            FOTONYX Photography
                        </Link>. All rights reserved.
                        <span className="mx-2">|</span>
                        <button
                            onClick={() => setShowModal("privacy")}
                            className="text-gray-400 hover:underline hover:text-indigo-400"
                        >
                            Privacy Policy
                        </button>
                        <span className="mx-1">/</span>
                        <button
                            onClick={() => setShowModal("terms")}
                            className="text-gray-400 hover:underline hover:text-indigo-400"
                        >
                            Terms & Conditions
                        </button>
                    </div>

                    <div className="mt-6 sm:mt-0">
                        <ul className="flex items-center px-5 space-x-5">
                            <li>
                                <a href="https://www.instagram.com/fotonyx_" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="w-5 h-5 hover:text-indigo-400" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/people/Fotonyx/61575053978271/" target="_blank" rel="noopener noreferrer">
                                    <Facebook className="w-5 h-5 hover:text-indigo-400" />
                                </a>
                            </li>
                            <li>
                                <a href="https://g.co/kgs/X2yhQKF" target="_blank" rel="noopener noreferrer">
                                    <FaGoogle className="w-5 h-5 hover:text-indigo-400" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

          
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
                    <div className="bg-white rounded-xl max-w-3xl w-full p-6 shadow-lg relative overflow-y-auto max-h-[90vh]">
                        <h2 className="text-xl font-semibold text-black mb-4">
                            {showModal === "privacy" ? "FOTONYX Privacy Policy" : "FOTONYX Terms & Conditions"}
                        </h2>
                        <div className="text-sm text-gray-800 whitespace-pre-wrap overflow-y-auto max-h-[60vh]">
                        {showModal === "privacy" ? (
  `Last Updated: 15 APRIL 2025

 1. Introduction
 Welcome to FOTONYX ("we," "us," or "our"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.

 2. Information We Collect
 We may collect personal information such as name, email address, phone number, and event details. We also collect technical data like IP addresses and browser type.

 3. Use of Your Information
 We use your data to:
 - Provide and manage photography bookings
 - Send newsletters and promotional materials
 - Respond to inquiries and customer support

 4. Sharing of Information
 We do not sell or rent your data. We may share information with:
 - Service providers involved in delivering our services
 - Law enforcement when required by law

 5. Data Retention
 We retain your data only as long as necessary to fulfill the purposes outlined.

 6. Your Rights
 You have the right to access, update, or delete your information at any time by contacting us at support@fotonyx.in.

 7. Cookies
 We may use cookies to improve user experience and analyze site traffic.

 8. Third-Party Links
 Our site may contain links to third-party websites. We are not responsible for their privacy practices.

 9. Updates to This Policy
 We may update this policy occasionally. Continued use of our site implies acceptance of changes.

 10. Contact Us
 If you have any questions about this Privacy Policy, contact us at support@fotonyx.in.
`
) : (
  `Last Updated: 15 APRIL 2025

 1. Acceptance of Terms
 By accessing or using our services, you agree to these Terms and Conditions.

 2. Services Offered
 FOTONYX provides professional photography services for weddings, events, portraits, and more.

 3. Booking & Payment
 A non-refundable advance is required to confirm bookings. Full payment must be made before delivery of final outputs.

 4. Cancellation Policy
 Cancellations must be made 7 days prior to the event for rescheduling. Last-minute cancellations may incur a fee.

 5. Delivery Timeline
 Edited photos/videos will be delivered within 10-15 working days from the date of the shoot unless otherwise agreed.

 6. Copyright & Usage
 All photos are the property of FOTONYX unless otherwise stated. Clients are granted personal use rights. Commercial use requires written permission.

 7. Client Responsibilities
 Clients must provide accurate event details and ensure cooperation on the day of the shoot.

 8. Limitation of Liability
 FOTONYX is not liable for delays or failure caused by force majeure or technical issues beyond our control.

 9. Governing Law
 These terms are governed by the laws of India. Any disputes will be handled in Coimbatore jurisdiction.

 10. Contact Us
 For any concerns, please reach out at support@fotonyx.in.
`
)}

                        </div>

                        <div className="flex justify-end space-x-4 mt-6">
                            <button
                                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-black"
                                onClick={() => setShowModal(null)}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                                onClick={() => {
                                    alert("You accepted the terms.");
                                    setShowModal(null);
                                }}
                            >
                                Accept
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Footer;
