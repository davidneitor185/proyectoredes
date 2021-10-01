
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (

    <div className="principal-container">
      <button type="button" class="btn btn-dark button">Buscar Peers</button>
      <div className="flex-container">
      
        <form className="form">
          
          <table class="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">Peer</th>
                <th scope="col">Host</th>
                <th scope="col">DocumentoPDF</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>192.123.123.123</td>
                <td>networking_for_dummies</td>
              </tr>
            </tbody>

          </table>

        </form>
      </div>
    </div>
  );
}

export default App;
