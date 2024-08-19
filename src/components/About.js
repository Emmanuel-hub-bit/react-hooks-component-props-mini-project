import React from "react";

function About({image, about}) {
    return (
        <aside>
            <img src={image || "https://via.placeholder.com/215"} alt="blog logo" />
            <p>{about}</p>
        </aside>
    );
};

// About.propTypes = {
//     image: PropTypes.string,
//     about: PropTypes.string.isRequired
//   };

export default About;