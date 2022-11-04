const request=require("supertest");
const {gravarDados,buscaTodosDados,buscaDados}=require("./database/database.local");

describe("Conjunto de testes dadabase.local",()=>{

    it("teste gravadados deve retornar true",async()=>{
        const databaseSpy = jest.spyOn(localStorage, 'getItem');
        databaseSpy.mockReturnValue(true);
      
        //cenário
        const esperado=true;
        //execução
        const res= gravarDados({teste:1});
        
      

        //validação
        expect(res).toBe(esperado);
    });
    it("teste buscar dados e retornar trur",async()=>{
        const databaseSpy = jest.spyOn(localStorage, 'getItem');
        databaseSpy.mockReturnValue(true);
      
        //cenário
        const esperado=true;
        //execução
        const res= buscaTodosDados();
        
      

        //validação
        expect(res).toBe(esperado);
    });
    it("teste buscar dados e retornar trur",async()=>{
        const databaseSpy = jest.spyOn(localStorage, 'getItem');
        databaseSpy.mockReturnValue(true);
      
        //cenário
        const esperado=true;
        //execução
        const res= buscaDados(1);
        
      

        //validação
        expect(res).toBe(esperado);
    });

})