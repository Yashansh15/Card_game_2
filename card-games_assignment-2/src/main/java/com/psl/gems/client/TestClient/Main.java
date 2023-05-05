package com.psl.gems.client.TestClient;
import java.util.*;
import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Array;
import java.util.concurrent.ThreadLocalRandom;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.*;


public class Main {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 JSONObject jsonObject = new JSONObject();
		 JSONArray array=new JSONArray();
		
		 
		 String[] suits = {"CLUB", "DIAMOND", "HEART", "SPADE"};
	     String[] ranks = {"TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "JACK", "QUEEN", "KING", "ACE"};
	     for (String suit : suits) {
	            for (String rank : ranks) {
	            	JSONObject j = new JSONObject();
	                j.put("SUIT",suit);
	                j.put("RANK",rank);
	                array.add(j);
	            }
	        }
		 
		 
		 ArrayList<Object>list=new ArrayList<Object>();
		 for(int i=0;i<array.size();i++)
		 {
			 list.add(array.get(i));
		 }
		 Collections.shuffle(list);
		 JSONArray array1=new JSONArray();
		 for(Object p:list)
		 {
			 array1.add(p);
		 }
		 
		 
		 jsonObject.put("PackOfCards", array1);
	      try {
	         FileWriter file = new FileWriter("pack-of-cards.json");
	         file.write(jsonObject.toJSONString());
	         file.close();
	      }
	      catch (IOException e) {
	          e.printStackTrace();
	       }
	       System.out.println("JSON file created: "+jsonObject);
	         
	}

}
