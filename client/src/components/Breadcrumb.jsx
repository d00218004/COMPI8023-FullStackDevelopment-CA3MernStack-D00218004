import React from 'react';

class Breadcrumb extends React.Component {
    render() {
        return (
            <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="../">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>
        );
    }
}
export default Breadcrumb;