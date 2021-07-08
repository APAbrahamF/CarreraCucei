:- style_check(-singleton).
union(a,b).
union(b,a).
union(b,c).
union(b,d).
union(b,f).
union(c,b).
union(c,d).
union(d,b).
union(d,c).
union(d,e).
union(d,i).
union(e,d).
union(e,h).
union(f,g).
union(f,b).
union(g,f).
union(g,k).
union(g,h).
union(h,k).
union(h,i).
union(h,e).
union(h,g).
union(i,d).
union(i,h).
union(i,j).
union(j,i).
union(k,h).
union(k,g).


buscar3(I,V,L,F):- I = F, L = V.
buscar3(I,V,L,F):- union(I,B), nomember(B,V), append([B],V,V2), buscar3(B,V2,L,F).
buscar2(I,L,F):- union(I,B), append([B],[I],V), buscar3(B,V,L,F).
buscar(I,L,F):- findall(L2,buscar2(I,L2,F),L3), menor(L3,L),nl,write("Caminos encontrados: "), nl, write(L3), nl.

buscar(I,L,F,F2):- buscar(I,L1,F), buscar(I,L2,F2),append([L1],[L2],L3),menor(L3,L).

nomember(A,B):- not(member(A,B)).

menor([],Z,L):- L = Z.
menor([X|Y],Z,L):- length(Z,N1), length(X,N2), N1 > N2, menor(Y,X,L).
menor([X|Y],Z,L):- length(Z,N1), length(X,N2), N1 = N2, menor(Y,Z,L).
menor([X|Y],Z,L):- length(Z,N1), length(X,N2), N1 < N2, menor(Y,Z,L).
menor([X|Y],L):- menor(Y,X,L).



