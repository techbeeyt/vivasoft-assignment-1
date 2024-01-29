import logo from "../assets/images/logo.png";
import Button, { BtnVariants } from "./Button";
import DropDown from "./DropDown";

export default function Header() {
  return (
    <div className="w-full sticky top-0 left-0 shadow h-20 bg-white z-20 px-10 flex justify-start items-center gap-8">
      <img src={logo} alt="montasir" className="h-16" />
      <div className="flex justify-center items-center h-full">
        <DropDown text="Services">
          <div className="bg-white border-t border-gray-200 px-20 pt-4 pb-8">
            <h1 className="text-xl font-bold">Services</h1>
            <div className="grid grid-cols-4">
              <div>
                <h1 className="text-lg font-semibold">Web Design</h1>
                <div>Figma to HTML</div>
                <div>Basic Design</div>
                <div>CSS Fix</div>
                <div>Mobile Responsiveness</div>
                <div>SEO</div>
                <h1 className="text-lg font-semibold mt-2">
                  Performance Optimization
                </h1>
                <div>Optimize page speed</div>
                <div>Optimize Search</div>
              </div>

              <div>
                <div>Google Page Speed</div>
                <div>Handle More Traffic Handling</div>
                <h1 className="text-lg font-semibold mt-2">Step Up Business</h1>
                <div>A/B Testing</div>
                <div>Increase Traffic</div>
                <div>Automate Your Admin Panel</div>
                <div>Quick Response</div>
                <div>Secure Payment Gateway</div>
                <div>Email Marketing</div>
              </div>

              <div>
                <h1 className="text-lg font-semibold">User Experience</h1>
                <div>Live Chat Support System</div>
                <div>Chatbot Customer Care</div>
                <div>User Feedback System</div>
                <h1 className="text-lg font-semibold mt-2">
                  Backend Development
                </h1>
                <div>Content Management System</div>
                <div>Node Js</div>
                <div>Secure Web Storage</div>
                <div>Scalable Web Api</div>
              </div>

              <div>
                <h1 className="text-lg font-semibold">API Integration</h1>
                <div>Google API</div>
                <div>OpenAI API</div>
                <div>Meta Ad</div>
                <div>More API</div>
                <div>None</div>
                <h1 className="text-lg font-semibold mt-2">Machine Learning</h1>
                <div>Recommendation System</div>
                <div>Customized Newsletter</div>
              </div>
            </div>
          </div>
        </DropDown>
        <div className="h-full hover:bg-gray-50 _center px-6 cursor-pointer">
          Adventure
        </div>
        <div className="h-full hover:bg-gray-50 _center px-6 cursor-pointer">
          Products
        </div>
        <div className="h-full hover:bg-gray-50 _center px-6 cursor-pointer">
          Sale
        </div>
      </div>
      <div className="ml-auto _center gap-6">
        <Button text="Login" className="" variant={BtnVariants.Outline} />
        <Button text="Sign Up" className="" />
      </div>
    </div>
  );
}
