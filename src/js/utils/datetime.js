const showFormattedDateTime = (date) => {
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
    hour12: false,
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};
   
export { showFormattedDateTime };