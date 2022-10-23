export const formatTopics = (topic) => {
    if (topic === "budgeting") {
      return "Budget";
    } else if (topic === "debts") {
      return "Debts";
    } else if (topic === "check_in") {
      return "Check";
    } else if (topic === "emergency_fund") {
      return "Emergency Fund";
    } else if (topic === "pension") {
      return "Pension";
    }  else if (topic === "savings") {
        return "Savings";
    } else {
      return;
    }
  };


  export const createExtract = (post) => {
    const postLength = post.content.split(' ').length
  
    if (postLength > 50 ) {
    return post.content.split(' ').slice(0, 50).join(' ') + "..."
    }
    return post.content
  }