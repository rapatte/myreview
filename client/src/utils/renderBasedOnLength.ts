export const renderBasedOnLength = (data: {
  firstName: string;
  lastName: string;
  title: string;
  client: string;
}) => {
  if (data.firstName && data.lastName) {
    const names = `${data.lastName} ${data.firstName}`;
    return names.length > 15 ? names.substr(0, 13) + '...' : names;
  }
  if (data.title) {
    const title = data.title;
    return title.length > 15 ? title.substr(0, 13) + '...' : title;
  }
};
