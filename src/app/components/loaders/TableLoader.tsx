const TableLoader = () => {
  return (
    <tr className="animate-pulse">
      <td className="py-4 flex items-center">
        <div className="w-16 h-16 rounded-lg mr-4 shimmer"></div>
        <span className="w-24 h-6 shimmer"></span>
      </td>
      <td className="text-left py-4 w-24 h-6 shimmer"></td>
      <td className="text-left py-4 w-24 h-6 shimmer"></td>
      <td className="text-left py-4 w-24 h-6 shimmer"></td>
      <td className="py-4 text-right w-24 h-6 shimmer"></td>
    </tr>
  );
};

export default TableLoader;
