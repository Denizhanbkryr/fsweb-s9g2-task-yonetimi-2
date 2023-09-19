import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const deadlineDate = new Date(taskObj.deadline);
  const daysUntilDeadline = formatDistanceToNow(deadlineDate, {
    addSuffix: true,
    locale: tr,
  });

  const accentClass =
    differenceInDays(deadlineDate, new Date()) <= 3 ? "normal" : "urgent";
  return (
    <div className="p-6 rounded-md leading-normal mt-4 bg-white shadow-[0_4px_5px_0_rgb(0, 0, 0, 0.1)]">
      <h3 className="text-lg text-taskColor">{taskObj.title}</h3>
      <div className="deadline">
        Son teslim:{" "}
        <span className={`${accentClass} py-1 px-2 inline-block rounded-sm`}>
          {daysUntilDeadline}
        </span>
      </div>
      <p className="pt-2 pb-3 px-0 text-sm text-[#444]">
        {taskObj.description}
      </p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block py-[5px] px-3 text-base border-solid border-2 border-pill rounded-[30px] mr-1 mb-1.5"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block py-2 px-3 ml-auto bg-[#fecc91] shadow-[0_4px_5px_0_rgb(0, 0, 0, 0.05) rounded-1 border-0 cursor-pointer"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
