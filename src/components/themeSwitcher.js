import React from "react";

const myThemes = [
    {
        id: "theme-midnightgreen",
        name: "Midnight Green",
    },
    {
        id: "theme-spacegray",
        name: "Space Gray",
    },
    {
        id: "theme-twitter",
        name: "Twitter Dark",
    },
    {
        id: "theme-reddead",
        name: "Red Dead",
    },
    {
        id: "theme-fallguys",
        name: "Fall Guys",
    },
    {
        id: "theme-christmas",
        name: "Christmas",
    },
]

const ThemePicker = ({ theme, setTheme }) => {
  if (theme) {
  return (
    <div>
      {myThemes.map((item, index) => {
          const nextTheme = myThemes.length -1 === index ? myThemes[0].id : myThemes[index+1].id;
        
           return item.id === theme ? (
            <div key={item.id} className={item.id}>
              <button
                aria-label={`Theme ${item.name}`}
                onClick={() => setTheme(nextTheme)}
              >
                {item.name}
              </button>
            </div>
          ) : null;
            }
        )}
    </div>
  );
  }
  return null;
};

export default ThemePicker;