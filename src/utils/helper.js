export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString('en-US');
  return d.toLocaleDateString() + ' | ' + time.substr(0, 5) + time.slice(-2);
}

export function formatQuestion(question, author, authorizedUser) {
  const { name, avatarURL } = author;
  const { id, optionOne, optionTwo, timestamp } = question;

  return {
    author: name,
    avatar: avatarURL,
    optionOne: optionOne.text,
    optionTwo: optionTwo.text,
    timestamp: formatDate(timestamp),
    isAnswered: authorizedUser ? authorizedUser.questions.includes(id) : null,
  };
}
