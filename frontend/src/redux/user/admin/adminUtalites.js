

export const removeUserUtilits = (usersList, acion) => {
  const usersListAfterFilter = usersList.filter((user) => user._id !== acion.payload)

  return usersListAfterFilter 
}
