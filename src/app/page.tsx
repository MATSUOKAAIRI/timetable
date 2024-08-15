'use client';
const TableComponent = () => (
  <table>
    <tbody>
      <tr>
        <td>Content</td>
      </tr>
    </tbody>
  </table>
);
import Home from '../components/Home';
export default function MainPage() {
  return (
 <div>
  <div className="bg_pattern Paper_v2">
  
    <h1 className="h1">時間割</h1>

    <table className="design08">
      <tbody>
        <tr>
         <th> </th>
         <th>月曜日</th>
         <th>火曜日</th>
         <th>水曜日</th>
         <th>木曜日</th>
         <th>金曜日</th>
         </tr>
         </tbody>
         <tbody>
        <tr>
         <td>1</td>
         <td>
         <div>
      <Home />
    </div>
         </td>
         <td>
         <div>
      <Home />
    </div>
         </td>
         <td>
         <div>
      <Home />
    </div>
         </td>
         <td>
         <div>
      <Home />
    </div>
         </td>
         <td>
         <div>
      <Home />
    </div>
         </td>
        </tr>
        </tbody>
        <tbody>
        <tr>
         <td>2</td>
         <td>H</td>
         <td>I</td>
         <td>b</td>
         <td>a</td>
         <td>q</td>
        </tr>
        </tbody>
        <tbody>
        <tr>
         <td>3</td>
         <td>K</td>
         <td>L</td>
         <td>a</td>
         <td>e</td>
         <td>q</td>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <td>4</td>
          <td>m</td>
          <td>n</td>
          <td>w</td>
          <td>q</td>
          <td>z</td>
        </tr>
        </tbody>
        <tbody>
        <tr>
            <td>5</td>
            <td>o</td>
            <td>p</td>
            <td>y</td>
            <td>n</td>
            <td>o</td>
        </tr>
        </tbody>
    </table>
   </div> 
   </div>
  );
}
