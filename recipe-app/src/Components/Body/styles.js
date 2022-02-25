import styled from 'styled-components';

export const BodyContainer = styled.header`
  .fav-container{
    padding: 1rem;
    text-align: center;
    background-color: #ddd;
    .fav-meals{
      display: flex;
      list-style-type: none;
      padding: 0.5rem;
      li{
        width: 85px;
        img{
          border: 2px solid #ffffff; 
          border-radius: 50%;
          object-fit: cover;
          height: 70px;
          width: 70px;
          box-shadow: 0 0 10px 2px #3333331A;
        }
        span{
          font-size: 0.9rem;
        }
      }
    }
  }
`;
