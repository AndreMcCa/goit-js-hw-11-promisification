const delay = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(ms);
        }, ms);
    });    
};

const logger = time => console.log(`Task_1:`, `Resolved after ${time}ms`);

delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);

