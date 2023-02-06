import { useContext } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import { BiDownArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import PageHeader from "../../components/PageHeader";

import { ThemeContext } from "../../context/ThemeContext";

const FAQ_Items = [
  {
    id: "1",
    question: "An important question",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nam asperiores illum eveniet omnis inventore beatae consequuntur consectetur pariatur quo et similique, non excepturi veniam rerum commodi dolor? Reiciendis, saepe?",
  },
  {
    id: "2",
    question: "An important question",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nam asperiores illum eveniet omnis inventore beatae consequuntur consectetur pariatur quo et similique, non excepturi veniam rerum commodi dolor? Reiciendis, saepe?",
  },
  {
    id: "3",
    question: "An important question",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nam asperiores illum eveniet omnis inventore beatae consequuntur consectetur pariatur quo et similique, non excepturi veniam rerum commodi dolor? Reiciendis, saepe?",
  },
  {
    id: "4",
    question: "An important question",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nam asperiores illum eveniet omnis inventore beatae consequuntur consectetur pariatur quo et similique, non excepturi veniam rerum commodi dolor? Reiciendis, saepe?",
  },
];

const Faq = () => {
  const { theme } = useContext(ThemeContext);

  const accordionHeadingClasses = `
    ${
      theme === "dark"
        ? "bg-gray-800 border-slate-500"
        : "bg-gray-200 border-gray-300"
    } 
    h-12 text-teal-500 border-t-[1px]
  `;

  const accordionPanelClasses = `
    ${
      theme === "dark"
        ? " text-slate-200 bg-gray-800"
        : "text-gray-800 bg-gray-200"
    }
    p-3 
  `;

  return (
    <div>
      <PageHeader header="FAQ" subheader="Frequently Asked Questions Page" />
      <Accordion className="mt-8">
        {FAQ_Items.map((item) => (
          <AccordionItem key={item.id} className="mb-2">
            <AccordionItemHeading className={accordionHeadingClasses}>
              <AccordionItemButton className="h-full flex items-center justify-between p-4">
                {item.question}
                <AccordionItemState>
                  {({ expanded }) =>
                    expanded ? <BiDownArrowAlt /> : <BiLeftArrowAlt />
                  }
                </AccordionItemState>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={accordionPanelClasses}>
              <p>{item.answer}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
