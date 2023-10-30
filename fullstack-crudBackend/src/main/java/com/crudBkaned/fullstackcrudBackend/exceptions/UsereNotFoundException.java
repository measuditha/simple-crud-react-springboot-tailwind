package com.crudBkaned.fullstackcrudBackend.exceptions;

public class UsereNotFoundException extends RuntimeException{
    public UsereNotFoundException(Long id){
        super("Could not find the user"+ id);
    }

}
