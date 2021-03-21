import axios from 'axios';
import {API_URL} from '../environments/env.json';

const Get = async (path) => {
  const headers = {};
  const promise = new Promise((resolve, reject) => {
    axios({
      method: 'get',
      baseURL: `${API_URL}`,
      url: `${path}`,
      headers,
    }).then(
      (res) => {
        resolve(res.data);
      },
      (err) => {
        reject(err);
      },
    );
  });
  return promise;
};

const Post = async (path, request) => {
  const headers = {};
  const promise = new Promise((resolve, reject) => {
    axios({
      method: 'post',
      baseURL: `${API_URL}`,
      url: `${path}`,
      data: request,
      headers,
    }).then(
      (res) => {
        resolve(res.data);
      },
      (err) => {
        reject(err);
      },
    );
  });
  return promise;
};

const Put = async (path, request) => {
  const headers = {};
  const promise = new Promise((resolve, reject) => {
    axios({
      method: 'put',
      baseURL: `${API_URL}`,
      url: `${path}`,
      data: request,
      headers,
    }).then(
      (res) => {
        resolve(res.data);
      },
      (err) => {
        reject(err);
      },
    );
  });
  return promise;
};

const Delete = async (path, request) => {
  const headers = {};
  const promise = new Promise((resolve, reject) => {
    axios({
      method: 'delete',
      baseURL: `${API_URL}`,
      url: `${path}`,
      data: request,
      headers,
    }).then(
      (res) => {
        resolve(res.data);
      },
      (err) => {
        reject(err);
      },
    );
  });
  return promise;
};

const Services = {
  Get,
  Post,
  Put,
  Delete,
};

export default Services;
