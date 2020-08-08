export function Node(props){
	return <tr>
          <td>ESN Node</td>
          <td>109972</td>
          <td>0</td>
          <td>6/16/2020, 4:59:13 PM</td>
          <td>
            <a href="btn">
              <Link to="/Nodestatustransaction">
                View All Transactions{' '}
                <i
                  class="fa fa-long-arrow-right"
                  aria-hidden="true"
                ></i>
              </Link>
            </a>
          </td>
        </tr>
}