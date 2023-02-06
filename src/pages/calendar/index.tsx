import { useState, useContext } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  DateSelectArg,
  EventClickArg,
  EventApi,
  formatDate,
} from "@fullcalendar/core";

import { ThemeContext } from "../../context/ThemeContext";
import PageHeader from "../../components/PageHeader";

const Calendar = () => {
  const [events, setEvents] = useState<EventApi[]>([]);
  const { theme } = useContext(ThemeContext);

  const calendarClasses = `
    ${theme === "dark" ? "bg-slate-800" : "bg-gray-200"}
    flex justify-between p-4 rounded-md mt-8
  `;

  const calendarBoxClasses = `
    ${theme === "dark" ? "text-slate-200" : "text-gray-800"}
  `;

  const eventsHeaderClases = `
    ${theme === "dark" ? "text-slate-200" : "text-gray-800"}
    text-xl mb-4
  `;

  const eventClasses = `
    ${theme === "dark" ? "text-slate-200" : "text-gray-800"}
    h-14 p-1 bg-teal-500 rounded-md mb-4 last:mb-0
  `;

  const handleDateClick = (selected: DateSelectArg) => {
    const title = prompt("Please enter a new title for your event.");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    if (typeof title === "string") {
      calendarApi.addEvent({
        id: `${Date.now()}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event ${selected.event.title} ?`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <div>
      <PageHeader
        header="CALENDAR"
        subheader="Full Calendar Interactive Page"
      />
      <div className={calendarClasses}>
        {/* CALENAD SIDEBAR */}
        <div className="w-1/5 pr-4">
          <h5 className={eventsHeaderClases}>EVENTS</h5>
          <ul>
            {events.map((event) => (
              <li key={event.id} className={eventClasses}>
                <p>{event.title}</p>
                <p>
                  {formatDate(event.start!, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </li>
            ))}
          </ul>
        </div>
        {/* CALENDAR */}
        <div className="w-4/5">
          <FullCalendar
            viewClassNames={calendarBoxClasses}
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
