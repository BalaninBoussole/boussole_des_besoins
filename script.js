#compass {
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 2px solid #000;
    margin: 50px auto;
}

#center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.need {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: #f00;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: background-color 0.5s;
}

#need1 { top: 0; left: 50%; transform: translateX(-50%); }
#need2 { top: 50%; left: 100%; transform: translate(-50%, -50%); }
#need3 { top: 100%; left: 50%; transform: translate(-50%, -50%); }
#need4 { top: 50%; left: 0; transform: translate(50%, -50%); }

#feedback {
    margin-top: 20px;
    text-align: center;
    color: #00f;
}

#resources {
    margin-top: 20px;
    text-align: center;
}

#resources a {
    display: block;
    margin-top: 10px;
    color: #00f;
    text-decoration: none;
}

#resources a:hover {
    text-decoration: underline;
}
