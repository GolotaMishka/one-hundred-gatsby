import * as React from "react";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

// const badgeStyle = {
//   color: "#fff",
//   backgroundColor: "#088413",
//   border: "1px solid #088413",
//   fontSize: 11,
//   fontWeight: "bold",
//   letterSpacing: 1,
//   borderRadius: 4,
//   padding: "4px 6px",
//   display: "inline-block",
//   position: "relative",
//   top: -2,
//   marginLeft: 10,
//   lineHeight: 1,
// };

const wishes = [
  {
    text: "Jump down with a parachute",
    description: "Jump from over then 4000 meters",
    color: "#E95800",
  },
  {
    text: "Get a private pilot license",
    description:
      "Become a private pilot to be an able to fly on the personal plane",
    color: "#1099A8",
  },
  {
    text: "Learn Surfing",
    description: "Learn How To Surf",
    color: "#BC027F",
  },
  {
    text: "To Live for 3 months on the Bali",
    description:
      "Spend a winter on the hot beaches of some tropical countries like Bali",
    color: "#0D96F2",
  },
];

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>
          — you on the Mishka's website! 🎉🎉🎉
        </span>
      </h1>

      <ul style={listStyles}>
        {wishes.map((wishe) => (
          <li
            key={wishe.title}
            style={{ ...listItemStyles, color: wishe.color }}
          >
            <span>
              <p style={linkStyle}>{wishe.text}</p>
              {/* {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )} */}
              <p style={descriptionStyle}>{wishe.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;
