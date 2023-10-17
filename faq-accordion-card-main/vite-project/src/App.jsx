import imageOfWomanMobile from "../../images/illustration-woman-online-mobile.svg";
import imageOfWomanDesktop from "../../images/illustration-woman-online-desktop.svg";
import imageOfBoxMobile from "../../images/bg-pattern-mobile.svg";
import imageOfBoxDesktop from "../../images/illustration-box-desktop.svg";

import Accordion from "./comp/Accordion";

function App() {
  const data = [
    {
      id: "2qndjkandbkaj528y82njkdanjk8",
      question: "How many team members can I invite?",
      answer: `You can invite up to 15 team members.`,
    },
    {
      id: "78dsauidbhabdjhadanjdkanjkk2",
      question: "What is the maximum file upload size?",
      answer: `No more than 2GB. All files in your account must fit your
      allotted storage space.`,
    },
    {
      id: "ud9ha98dahuidajdajdbjhajkad5",
      question: "How do I reset my password?",
      answer: `Go to your settings and click on "reset password".`,
    },
    {
      id: "781ndejkasbd7823db3u2idb3ed3",
      question: "Can I cancel my subscription?",
      answer: `Yes, you can choose to cancel your subscription at any time.`,
    },
    {
      id: "7d8adiabdiuar3irnekjsnakln93",
      question: "Do you provide additional support?",
      answer: `Yes, you can contact us at faq@thiscompany.com`,
    },
  ];

  return (
    <div className="position-app">
      <div className="app">
        <div className="card">
          <div className="illustration-mobile">
            <img
              id="img-woman-mobile"
              src={imageOfWomanMobile}
              alt="illustration of woman on computer"
            />
            <img
              id="img-box-mobile"
              src={imageOfBoxMobile}
              alt="illustration of shadow"
            />
          </div>
          <div className="illustration-desktop">
            <img
              id="img-woman-desktop"
              src={imageOfWomanDesktop}
              alt="illustration of woman on computer"
            />
            <img
              id="img-box-desktop"
              src={imageOfBoxDesktop}
              alt="illustration of woman on computer"
            />
          </div>
          <div className="faq">
            <h1>FAQ</h1>
            <ul className="accordian">
              {data.map((item) => (
                <Accordion key={item.id} q={item.question} a={item.answer} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
