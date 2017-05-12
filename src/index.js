import './index.css';
import {getNodes} from './api/nodeApi';

getNodes().then(result => {
  let nodesBody = "";

  result.forEach(node => {
    nodesBody += `<tr>
    <td><a href="#" data-id="${node.id}" class="deleteNode">Delete</a></td>
    <td>${node.id}</td>
    <td>${node.node}</td>
    </tr>`
  });

  global.document.getElementById('nodes').innerHTML = nodesBody;
})
