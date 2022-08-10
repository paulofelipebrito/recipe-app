import styled from 'styled-components';

export const BodyContainer = styled.header`
  .fav-container{
    padding: 0.25rem 1rem;
    text-align: center;
    background-color: rgb(243,225,255);
    .fav-meals{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      list-style-type: none;
      padding: 0.5rem;
      cursor: pointer;
      li{
        position: relative;
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
          display: inline-block;
          font-size: 0.9rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 75px;
        }
        .close{
          background-color: transparent;
          border: none;
          position: absolute;
          cursor: pointer;
          opacity: 0;
          top: -0.5rem;
          right: -0.5rem;
          font-size: 1.2rem;          
        }
      }
      li:hover{
        .close{
          opacity: 1;
        }
      }
    }
  }
  .meals{
    margin: 1.5rem;
    border-radius: 3px;
    box-shadow: 0 0 10px 2px #3333331A;
    overflow: hidden;
    .meal-header{
      position: relative;
      .random{
        position: absolute;
        top: 1rem;
        background-color: #fff;
        padding: 0.25rem 0.5rem;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
      }

      img{
        object-fit: cover;
        height: 250px;
        width: 100%;
        cursor: pointer;
      }
    }
    .meal-body{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      h4{
        margin: 0;
        cursor: pointer;
      }
      button{
        background-color: transparent;
        border: none;
        font-size: 1.2rem;
        color: rgb(197,188,188);
        cursor: pointer;
      }
    }
  }

  .popup-container{
    background-color: rgba(0,0,0, 0.5);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    right: 0;
    top:0;
    bottom: 0;
    
    .popup{
      position: relative;
      overflow: auto;
      background-color: #fff;
      max-width: 600px;
      width: 100%;
      max-height: 90vh;
      padding: 0 2rem;
      border-radius: 5px;
      h1{
        text-align: center;
      }
      .close-popup{
        position: absolute;
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
        top: 1rem;
        right: 1rem;
      }
    }
  }
  
`;
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  input{
    background-color: #efefef;
    border: none;
    border-radius: 3px;
    padding: 0.5rem 1rem;
    font-family: inherit;
  }

  button{
    background-color: transparent;
    color: rgb(138,129,141);
    border: none;
    font-size: 1.5rem;
    margin-left: 10px;
  }
`;