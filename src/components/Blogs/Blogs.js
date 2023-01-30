import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2>What is context API ?</h2>
      <p>
        The Context API is a way to pass data and state through a React
        application without having to pass props down through multiple levels of
        components. It provides a way to share data between components at
        different levels of the component tree without the need for props
        drilling. The Context API uses the createContext function to create a
        context object, and the useContext hook to consume the data in
        components. The context value can be updated using a provider component
        that wraps the components that need access to the context data. The
        Context API provides a more efficient and maintainable alternative to
        using props for passing data and state throughout a React application.
      </p>

      <br />

      <h2> What is semantic tag</h2>
      <p>
        Semantic tags are HTML elements that define the meaning and purpose of
        their content. In React, semantic tags are used to create structured and
        meaningful content for users and search engines. They also make it
        easier to style and organize content on a page. Some common semantic
        tags in React include header, nav, main, footer, and figure. Semantic
        tags are preferred over generic tags like div and span because they
        provide context to both users and search engines, making the content
        more accessible and easier to understand. They also allow developers to
        write clean and semantically correct code, which can improve the overall
        accessibility and maintainability of the application.
      </p>
    </div>
  );
};

export default Blogs;
