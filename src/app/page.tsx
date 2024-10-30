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
import Header from "../components/header/header";
export default function MainPage() {
 return (
 <div>
  <div className="bg_pattern Paper_v2">
    <>
  <Header>
</Header>
</>
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
         <td>
            1
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
         <td>
          <div>
            <Home />
          </div>
         </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
         <td>
          <div>
            2
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
         <td>
          <div>
            <Home />
          </div>
         </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
         <td>
          <div>
            3
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
         <td>
          <div>
            <Home />
          </div>
         </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
         <td>
          <div>
            4
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
         <td>
          <div>
            <Home />
          </div>
         </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
         <td>
            5
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
         <td>
          <div>
            <Home />
          </div>
         </td>
        </tr>
      </tbody>
    </table>
  </div> 
 </div>
  );
}
