import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { cn } from "../utils/style";
import { motion } from "framer-motion";

let tabs = [
  { id: "todo", label: "Todo List" },
  { id: "activity", label: "Activity Log" },
];

function Lists() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <Tabs.Root
      className="flex flex-col w-96 relative top-16 items-center"
      defaultValue={tabs[0].id}
    >
      <Tabs.List className="bg-gray-900 border border-gray-800 w-fit p-[10px] rounded-full">
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.id}
            value={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-8 py-[10px] rounded-full font-lexend font-normal text-sm text-white z-0",
              activeTab === tab.id && "text-gray-900"
            )}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 bg-lime-400"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative">{tab.label}</span>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
}

export default Lists;
