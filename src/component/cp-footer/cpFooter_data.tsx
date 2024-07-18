const getFooterData = () => {
    const footerData = [
      {
        label: "Account",
        url: "#",
        subMenu: [
          {
            label: "Sign In",
            url: "#",          
          },
          {
            label: "Register",
            url: "#",
          },
          {
            label: "Order Status",
            url: "#",
          },
        ],
      },
      {
        label: "About uscart",
        url: "#",
        subMenu: [
          {
            label: "Story",
            url: "#",
          },
          {
            label: "Career",
            url: "#",
          },
          
        ],
      },
      
      {
        label: "Help",
        url: "#",
        subMenu: [
          {
            label: "Contact us",
            url: "#",
          },
          {
            label: "order status",
            url: "#",
          },
          {
            label: "Return",
            url: "#",
          },
        ],
      },
     ];
    return footerData;
  };
  
  
  export { getFooterData };
  