import React, { useEffect, useState } from 'react';
import './Memos.css'; // Import the CSS file

const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    const { contract } = state;
    
    const memoMessage = async () => {
      try {
        const getMemos = await contract.getMemos();
        setMemos(getMemos);
      } catch (error) {
        console.error("Error fetching memos:", error);
      }
    };

    contract && memoMessage();
  }, [state]);

  return (
    <div>
      <table className="memo-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Message</th>
            <th>Timestamp</th>
            <th>From</th>
          </tr>
        </thead>
        <tbody>
          {memos.map((memo, index) => (
            <tr key={index}>
              <td>{memo.name}</td>
              <td>{memo.message}</td>
              <td>{new Date(memo.timestamp * 1000).toLocaleString()}</td>
              <td>{memo.from}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Memos;
