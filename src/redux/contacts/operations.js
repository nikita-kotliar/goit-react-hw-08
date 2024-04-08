import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      toast.success('fetchContacts fulfilled');

      return response.data;
    } catch (error) {
      toast.error(`fetchContacts rejected: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      toast.success('Contact is added');
      return response.data;
    } catch (error) {
      toast.error(`Contact is not saved: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      toast.success('Contact was deleted');
      return contactId; 
    } catch (error) {
      toast.error(`Contact is not deleted: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
