import whitelogo from "../assets/images/logo-white.png";

const Footer = () => {
  return (
    <div className="bg-sky-700 px-20 py-10">
      <div className="flex justify-start items-start gap-10 text-white">
        <div>
          <img src={whitelogo} alt="logo" className="h-16" />
        </div>

        <div>
          <h1 className="text-lg font-semibold text-gray-200">Web Design</h1>
          <div>Figma to HTML</div>
          <div>Basic Design</div>
          <div>CSS Fix</div>
          <div>Mobile Responsiveness</div>
          <div>SEO</div>
          <h1 className="text-lg font-semibold mt-2 text-gray-200">
            Performance Optimization
          </h1>
          <div>Optimize page speed</div>
          <div>Optimize Search</div>
        </div>

        <div>
          <div>Google Page Speed</div>
          <div>Handle More Traffic Handling</div>
          <h1 className="text-lg font-semibold mt-2 text-gray-200">
            Step Up Business
          </h1>
          <div>A/B Testing</div>
          <div>Increase Traffic</div>
          <div>Automate Your Admin Panel</div>
          <div>Quick Response</div>
          <div>Secure Payment Gateway</div>
          <div>Email Marketing</div>
        </div>

        <div>
          <h1 className="text-lg font-semibold text-gray-200">
            User Experience
          </h1>
          <div>Live Chat Support System</div>
          <div>Chatbot Customer Care</div>
          <div>User Feedback System</div>
          <h1 className="text-lg font-semibold mt-2 text-gray-200">
            Backend Development
          </h1>
          <div>Content Management System</div>
          <div>Node Js</div>
          <div>Secure Web Storage</div>
          <div>Scalable Web Api</div>
        </div>

        <div>
          <h1 className="text-lg font-semibold text-gray-200">
            API Integration
          </h1>
          <div>Google API</div>
          <div>OpenAI API</div>
          <div>Meta Ad</div>
          <div>More API</div>
          <div>None</div>
          <h1 className="text-lg font-semibold mt-2 text-gray-200">
            Machine Learning
          </h1>
          <div>Recommendation System</div>
          <div>Customized Newsletter</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
