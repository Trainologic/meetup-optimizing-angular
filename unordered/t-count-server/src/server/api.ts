import {Application} from 'express';
import * as path from 'path';
import {counters} from './counters';

export function registerApi(app: Application) {
  app.get("/api/counter", getAll);
  app.post("/api/counter", updateMany);
}

async function getAll(req, res) {
  let db = null;
  try {
    const c = [];

    for(const key in counters) {
      c.push(counters[key]);
    }

    res.json(c);
  }
  catch(err) {
    res.statusCode = 500;
    res.statusMessage = err.message;
    res.end();
  }
  finally {
    if(db) {
      db.close();
    }
  }
}

async function updateMany(req, res) {
  let db = null;
  try {
    const newCounters = req.body;
    if(Array.isArray(newCounters)) {
      for(const counter of newCounters) {
        counters[counter.name] = counter;
      }
    }
    else {
      counters[newCounters.name] = newCounters;
    }

    res.json({ok: true});
  }
  catch(err) {
    res.statusCode = 500;
    res.statusMessage = err.message;
    res.end();
  }
  finally {
    if(db) {
      db.close();
    }
  }
}
