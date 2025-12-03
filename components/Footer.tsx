import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold">Tejgaon College</h3>
            <p className="mt-2 text-sm text-white/80">16 Indira Road, Farmgate
              Dhaka-1215, Bangladesh</p>
            <p className="mt-2 text-sm text-white/80">tejgaoncollege@ymail.com</p>
            <p className="mt-1 text-sm text-white/80"> +88016xxxxxxxx</p>
          </div>
          <div>
            <h4 className="font-semibold">Academics</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Programs</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Faculties</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Admissions</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Library</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Campus Life</h4>
            <ul className="mt-3 space-y-2 text-sm">

              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Business Club</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Athletics</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Events</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Maps & Directions</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Careers</a></li>

            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/70 md:flex md:justify-between">
          <p>© 2025 Tejgaon College. All rights reserved. <br /> <span>Developed by Shakij Mahamud</span> </p>

          <div className="mt-4 flex justify-center space-x-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;