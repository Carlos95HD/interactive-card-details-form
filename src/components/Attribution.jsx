import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkIcon from '@mui/icons-material/Work';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


export const Attribution = () => {
  return (
      <div className="bg-transparent text-center text-gray-violet my-8 ml-2 md:mb-2 text-xs md:text-left lg:text-sm">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="underline">
          Frontend Mentor
        </a>
        . Coded by &nbsp;
        <Popup trigger={<button className="underline">Carlos Deasi</button>} position="top center">
          <div className="backdrop-blur-sm flex flex-col gap-3 text-gray-violet sm:flex-row">
            <a href="https://github.com/Carlos95HD"
              target="_blank"
              rel="noreferrer noopener"
              className="hvr-float"
            >
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/carlos-deasi/"
              target="_blank"
              rel="noreferrer noopener"
              className="hvr-float"
            >
              <LinkedInIcon />
            </a>
            <a href="https://deasiportfolio.netlify.app/"
              target="_blank"
              rel="noreferrer noopener"
              className="hvr-float"
            >
              <WorkIcon />
            </a>
            <a href="https://www.frontendmentor.io/profile/Carlos95HD"
              target="_blank"
              rel="noreferrer noopener"
              className="hvr-float"
            >
              <AccountBoxIcon />
            </a>
          </div>
        </Popup>
        .
      </div>
  );
};
