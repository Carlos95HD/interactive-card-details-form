import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkIcon from '@mui/icons-material/Work';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


export const Attribution = () => {
  return (

      <div className="bg-transparent text-center text-gray-violet ml-2 mb-2 text-xs md:text-left lg:text-sm">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by &nbsp;
        {/* <a href="#">Carlos Deasi</a>. */}
        <Popup trigger={<button className="underline">Carlos Deasi</button>} position="top center">
          <div className="backdrop-blur-sm flex flex-col gap-2 justify-between text-gray-violet sm:flex-row">
            <a href="https://github.com/Carlos95HD"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/carlos-deasi/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkedInIcon />
            </a>
            <a href="https://deasiportfolio.netlify.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <WorkIcon />
            </a>
            <a href="https://www.frontendmentor.io/profile/Carlos95HD"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AccountBoxIcon />
            </a>
          </div>
        </Popup>
        .
      </div>
  );
};
