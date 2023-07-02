<div>
  <h1>Be</h1>
  <h1>kind.</h1>
</div>

<style>
  div {
    color: var(--font-white);
    position: absolute;
    left: 2rem;
    top: 0;
    font-family: var(--fancy-font);
    font-size: 4rem;
    line-height: 50px;
  }

  div > h1 {
    animation: float 10s ease-in 1s infinite;
  }

  @keyframes float {
    0% {
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
    50% {
      text-shadow: 0 25px 15px rgba(0, 0, 0, 0.2);
      transform: translatey(-20px);
    }
    100% {
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
  }
</style>
